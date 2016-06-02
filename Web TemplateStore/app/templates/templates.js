angular.module('templateStore.templates', ['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/templates', {
		templateUrl: 'templates/templates.html',
		controller: 'TemplatesCtrl'
	}).when('/templates/:templateId', {
		templateUrl: 'templates/template_details.html',
		controller: 'TemplatesDetailCtrl'
	})
}])

.controller('TemplatesCtrl', ['$scope','$http',function ($scope,$http) {
	$http.get('json/template.json').success(function(response){
		$scope.templates=response;
	});
}]).controller('TemplatesDetailCtrl', ['$scope','$routeParams','$http','$filter',function ($scope,$routeParams,$http,$filter) {
	//get value from url
	var templateId=$routeParams.templateId;
	$http.get('json/template.json').success(function(response){
		$scope.template=$filter('filter')(response,function(data){
			return data.id==templateId;
		})[0];
		//$scope.template.images[0].name get value equal to id of details page
		$scope.MainImage=$scope.template.images[0].name;
	});
	//set main image via MainImage variable
	$scope.setImage=function(image){
		$scope.MainImage=image.name;
	}
}]);