angular.module('navrules-program').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			// when('/', {templateUrl: 'app/modules/navrules-program/views/index.html' }).
			when('/step', { templateUrl: 'app/modules/navrules-program/views/step.html'	}).
			when('/result', { templateUrl: 'app/modules/navrules-program/views/result.html'});
	}
]);

