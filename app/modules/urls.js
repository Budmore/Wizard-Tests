angular.module('urls', ['ngRoute']).config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.

			otherwise({
				redirectTo: '/step'
			});
	}
]);

