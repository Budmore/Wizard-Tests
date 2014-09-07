/**
 *	@name sentryClient
 *	@description Logging Client Side Errors with Raven-js to the Sentry.
 *
 *	@author Jakub Mach @Budmore
 *	@version v1.3-custom
 *	@date 23 April 2014
 *
 *	http://raven-js.readthedocs.org/en/latest
 */

define(['angular', 'raven-js', 'ravenInstall'], function(angular) {
	'use strict';
	angular.module('sentryClient', ['System']).factory('$exceptionHandler', ['$window', '$log',
		function ($window, $log) {

			return function (exception, cause) {

				if ($window.Raven) {
					// Default error handler - display error in the console
					$log.error.apply($log, arguments);

					var href = $window.location.href;
					var viewport = $window.innerWidth + 'x' + $window.innerHeight;

					$window.Raven.captureException( exception, {
						tags: {
							Viewport: viewport,
							Href: href,
						},
						extra: {
							Href: href,
							Cause: cause,
							Status: exception.status,
							Data: exception.config
						}
					});

				} else {
					// Default error handler
					$log.error.apply($log, arguments);
				}
			};
		}
	]);
});
