/**
* SingupCtrl Module
*
* Description
*/
angular.module('LoginMod').controller('LoginCtrl', ['$scope','$http','toastr', function ($scope,$http,toastr) {
	console.log('LoginCtrl init');
	$scope.runLogin = function(){
		$http.put('/login',{
			email : $scope.email,
			password : $scope.password
		}).then(function onSuccess(){
			window.location = '/dashboard';
		}).catch(function onError(err){
			if(err.status == 400 || 404){
				toastr.error("Invalid credentails","Error",{
					closeButton : true
				});
				return;
			}
			toastr.error("Error has ocurred","Error",{
					closeButton : true
			});
			return;
		})
	}
}])