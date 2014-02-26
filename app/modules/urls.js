angular.module('urls', ['ngRoute']).config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			// when('/', {templateUrl: 'app/modules/navrules-program/views/index.html' }).
			when('/step', { templateUrl: 'app/modules/navrules-program/views/step.html'	}).

			otherwise({
				redirectTo: '/'
			});
	}
]);

