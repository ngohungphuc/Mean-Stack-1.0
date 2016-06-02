var app=angular.module('computer',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/main',{
		templateUrl:'main.html',
		controller:'MainCtrl'
	}).when('/about',{
		templateUrl:'about.html',
		controller:'MainCtrl'
	}).when('/services',{
		templateUrl:'services.html',
		controller:'ServiceCtrl'
	}).when('/contact',{
		templateUrl:'contact.html',
		controller:'MainCtrl'
	}).otherwise({ redirectTo: '/main' });
	

}]);

app.controller('MainCtrl',['$scope',function($scope){
	$scope.person="Hung Phuc";
}]);

app.controller('ServiceCtrl',['$scope','$http',function($scope,$http){
	$http.get('service.json').then(function(response){
		$scope.services=response.data;
	});
}]);
