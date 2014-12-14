var appModule = angular.module('myApp', ['ngRoute', 'ngResource', 'app.controllers', 'app.filters', 'app.services']);

appModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/details/:Id', {
        templateUrl: '/repo-detail.html',
        controller: 'RepoCtrl'
      }).
	  when('/home', {
        templateUrl: '/home.html',
        controller: 'mainController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);