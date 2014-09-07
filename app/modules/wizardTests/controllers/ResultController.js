(function() {
	'use strict';
	define([], function() {

		var ResultController = function($scope) {

			$scope.percent = 65;

/*
		barColor: '#ef1e25',
		trackColor: '#f9f9f9',
		scaleColor: '#dfe0e0',
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 3,
		size: 110,
		rotate: 0,
		animate: {
			duration: 1000,
			enabled: true
		},
*/
			$scope.options = {
				barColor: '#5cb85c',
				scaleColor: false,
				size: 250,
				lineWidth: 20,
				lineCap: 'butt',
				animate: {
					duration: 1000,
					enabled: true
				},
				onStep: function(from, to, percent) {
					$scope.stepValue = Math.floor(percent);
					$scope.$digest();
				}

			};






		};

		return ['$scope', ResultController];
	});
}());



