angular.module('System.urls', ['ngRoute'])

	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
				when('/', {templateUrl: 'app/modules/navrules-program/views/step.html' }).

				otherwise({
					redirectTo: '/'
				});
	}]);

