var module = angular.module('app.controllers', ['app.services']);
module.controller("mainController", function($scope, github, $http) {
	$scope.search_query = [];

	$scope.github = github;
	$scope.qualifiers = [{
		qualificator: "size",
		include: '',
		description: 'kB'
	}, {
		qualificator: "forks",
		include: '',
		description: ''
	}, {
		qualificator: "stars",
		include: '',
		description: ''
	}];

	$scope.search = function() {

		var query = $scope.search_query;

		$scope.qualifiers.forEach(function(element, index) {
			if (element.include) {
				query += "%2B" + element.qualificator + ":" + element.include
			}
		})

		/*$scope.repos = $scope.github.get({
			q: query
		});		*/
		
		
		$scope.a = $http({method: 'GET', url: 'https://api.github.com/search/repositories?q='+query}).
		  success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			$scope.repos = data;
		  }).
		  error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		  });
	};
});

module.controller("RepoCtrl", function($scope, $routeParams, github) {
	 $scope.Id = $routeParams.Id;
	 $scope.repos = $scope.github.get({
			q: query
		});
});

