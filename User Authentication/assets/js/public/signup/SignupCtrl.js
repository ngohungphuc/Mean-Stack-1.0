/**
* SingupCtrl Module
*
* Description
*/
angular.module('SignupMod').controller('SignupCtrl', ['$scope','$http', function ($scope,$http) {
	$scope.runSignup = function (){
		//submit to sails server
		$http.post('/singup',{
			name  : $scope.name,
			email : $scope.email,
			password : $scope.password
		}).
		then(function onSucess(response){
			window.location = '/user'
		}).
		catch(function onError(error){
			console.log("Error " + error);
		});
	}
}])