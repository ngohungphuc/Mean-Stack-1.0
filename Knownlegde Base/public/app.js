var app = angular.module('kB',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/articles', {
		templateUrl: 'views/articles.view.html',
		controller: 'ArticlesCtrl'
	}).when('/articles/details/:id', {
		templateUrl: 'views/article_detail.view.html',
		controller: 'ArticleDetailCtrl'
	}).when('/articles/category/:category', {
		templateUrl: 'views/cat_article.view.html',
		controller: 'ArticlesCategoryCtrl'
	}).when('/articles/add', {
		templateUrl: 'views/add_article.view.html',
		controller: 'ArticlesAddCtrl'
	}).when('/articles/edit/:id', {
		templateUrl: 'views/edit_article.view.html',
		controller: 'ArticlesEditCtrl'
	}).
	otherwise({redirectTo: '/articles'})
}]);