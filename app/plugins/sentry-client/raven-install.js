define(['raven-js'], function() {
	'use strict';

	var sentryOptions = {};
	var sentryApiKey = 'http://7e66bf189512471c9240b2fe9231e48c@sentry.budmore.pl/13';

	// Raven install
	window.Raven.config(sentryApiKey, sentryOptions).install();

});
