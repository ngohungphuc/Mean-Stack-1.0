'use strict';

angular.module('ngSocial.facebook', ['ngRoute','ngFacebook'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/facebook', {
		templateUrl: 'facebook/facebook.html',
		controller: 'FacebookCtrl'
	});
}])

.config( function( $facebookProvider ) {
	$facebookProvider.setAppId('229146290794747');
	$facebookProvider.setPermissions("email,public_profile, user_posts, publish_actions, user_photos");
})

.run(function ($rootScope) {
	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
})

.controller('FacebookCtrl', ['$scope','$facebook',function($scope,$facebook) {
	$scope.isLoggedIn=false;

	//login to facebook
	$scope.login=function(){
		$facebook.login().then(function(){
			$scope.isLoggedIn=true;
			refresh();
		});
	}

	//logout
	$scope.logout=function(){
		$facebook.logout().then(function(){
			$scope.isLoggedIn=false;
			refresh();
		});
	}
	
	//post status
	$scope.postStatus=function($scope){
		var postValue=this.myPost;
		$facebook.api("/me/feed","post",{message:postValue}).then(function(response){
			refresh();
			
		});
		this.myPost='';
	}

	function refresh(){
		$facebook.api("/me").then(function(response){
			$scope.welcomeMsg="Welcome " + response.name;
			$scope.isLoggedIn=true;
			$scope.userInfo=response;
			//get user profile picture
			$facebook.api("/me/picture").then(function(response){
				$scope.picture=response.data.url;
				//get api permission
				$facebook.api("/me/permissions").then(function(response){
					$scope.permissions=response.data;
					//get user post 
					$facebook.api("/me/posts").then(function(response){
						$scope.posts=response.data;
					});
				});
			});

		},function(err){
			$scope.welcomeMsg="Please login";
		});
	}

	refresh();
}]);