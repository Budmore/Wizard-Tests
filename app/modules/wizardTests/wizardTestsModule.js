/**
 *	@name wizardTestsModule
 *
 *	@description
 *	Create angular modules to separate services, controllers, directives, etc...
 *	This makes easier to unit test it.
 */
(function() {
	'use strict';

	define([
		'angular',
		'./wizardTestsUrls',

		'./controllers/ResultController',
		'./controllers/StepController',
		'./services/stepService',
		'./resources/wizardTestResource',

		// './locale/en_EN',
		// './locale/pl_PL'

	], function(angular, wizardTestsUrls, ResultController, StepController, stepService, wizardTestResource) {


		var moduleName = 'wizardTests';
		var controllers = moduleName + '.controllers';
		var services = moduleName + '.services';


		angular.module( moduleName, [] )
			.constant('WIZARD_TESTS_PATH', './modules/wizardTests/')
			.config(wizardTestsUrls);

		angular.module( controllers , [] )
			.controller('ResultController', ResultController)
			.controller('StepController', StepController);

		angular.module( services, ['ngResource'] )
			.service('stepService', stepService)
			.service('wizardTestResource', wizardTestResource);
	});
}());
