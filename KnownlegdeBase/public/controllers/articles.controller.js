/**
* kb Module
*
* Description
*/
angular.module('kB')

.controller('ArticlesCtrl', ['$scope','$http', function ($scope,$http) {
	$http.get('/articles').success(function(data){
		$scope.articles=data;

	});
}])

//call to router.get('/:id') 
.controller('ArticleDetailCtrl', ['$scope','$http','$routeParams', function ($scope,$http,$routeParams) {
	$http.get('/articles/'+$routeParams.id).success(function(data){
		$scope.article=data;
	});
}])
