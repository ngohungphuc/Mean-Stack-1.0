/**
* SingupCtrl Module
*
* Description
*/
angular.module('DashMod').controller('DashCtrl', ['$scope','$http', function ($scope,$http) {
	//view call to this and then call to dash controller api
	$scope.getUser = function (){
		$http.get('/getUser').then(function onSuccess(user){
			$scope.user = user.data;
		}).catch(function onError(error){
			console.log(error);
		})
	}
}])