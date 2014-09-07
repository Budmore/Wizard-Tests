define([
	'require',
	'angular',
	'angularRoute',
	'angularCookies',
	'angularSanitize',
	'angularResource',
	'jQuery',
	'underscore',
	'angular-easepiechart',

	'../modules/wizardTests/wizardTestsModule',
	'../modules/app'

	], function(require, angular) {
		'use strict';
		require(['domReady!'], function(document) {
			angular.bootstrap(document, ['app']);
		});
	}
);
