(function() {
	'use strict';
	define([], function() {
		var wizardTestsUrls = function($routeProvider) {
			$routeProvider
			// when('/', {templateUrl: 'modules/wizardTests/views/index.html' }).
			.when('/step', { templateUrl: 'modules/wizardTests/views/step.html'})
			.when('/result', { templateUrl: 'modules/wizardTests/views/result.html'})

			.otherwise({redirectTo: '/step'});
		};

		return ['$routeProvider', wizardTestsUrls];
	});
}());
