//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
// TODO: test it
window.name = 'NG_DEFER_BOOTSTRAP!';

require.config({
	baseUrl: 'bower_components/',
	paths: {
		'angular': 'angular/angular',
		'angularRoute': 'angular-route/angular-route',
		'angularCookies': 'angular-cookies/angular-cookies',
		'angularSanitize': 'angular-sanitize/angular-sanitize',
		'angularResource': 'angular-resource/angular-resource',
		'domReady': 'requirejs-domready/domReady',
		'jQuery': 'jquery/dist/jquery',
		'underscore': 'underscore/underscore',
		'angular-easepiechart': 'jquery.easy-pie-chart/dist/angular.easypiechart.min'

	},
	shim: {
		'angular' : {'exports' : 'angular', deps:['jQuery']},
		'angularRoute': ['angular'],
		'angularCookies': ['angular'],
		'angularSanitize': ['angular'],
		'angularResource': ['angular'],
		'angular-easepiechart': ['angular'],
		'underscore': {exports: '_'},
		'jQuery': {exports: '$'},
	},
	priority: [
		'angular'
	],
	deps: [
		// kick start application...
		'../modules/require-bootstrap'
	]
});
