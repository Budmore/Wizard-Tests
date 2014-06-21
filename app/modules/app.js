// var t;
// t = {pl: {}, en: {}};

define( [
	'angular',
	'underscore',
	'angularResource',

	// Required for unit tests
	// '../modules/miniCore/miniCoreModule',


],
function (angular) {
	'use strict';
	return angular.module('app', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute',

		'wizardTests',
		'wizardTests.controllers',
		'wizardTests.services',

	]);
});
