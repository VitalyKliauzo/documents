var module = angular.module('app.controllers', ['app.services']);
module.controller("mainController", function($scope, github) {
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
				query += "+" + element.qualificator + ":" + element.include
			}
		})

		$scope.repos = Items;
		/*$scope.github.get({
			q: query
		});*/
	};
	
	$scope.search();

});

module.controller("RepoCtrl", function($scope, $routeParams) {
	 $scope.Id = $routeParams.Id;
	 $scope.repos = Items;
});

