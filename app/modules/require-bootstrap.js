define([
	'require',
	'angular',
	'angularRoute',
	'angularCookies',
	'angularSanitize',
	'angularResource',
	'jQuery',
	'underscore',

	'../modules/wizardTests/wizardTestsModule',
	'../modules/app'

	], function(require, angular) {
		'use strict';
		require(['domReady!'], function(document) {
			angular.bootstrap(document, ['app']);
		});
	}
);
