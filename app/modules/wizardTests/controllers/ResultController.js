(function() {
	'use strict';
	define([], function() {

		var ResultController = function($scope, stepService, $http) {

			$http.get('mockups/model-result.json').then(
				function success(response) {
					stepService.result.setModel(response.data);
				}
			);

			$scope.result = stepService.result.getModel();

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

			/**
			 *	@name isCorrect
			 *	@param {Object} answer
			 *	@return {Bolean}
			 */
			$scope.isCorrectAnswer = function(answer) {
				return answer.selectedAnswerId === answer.correctedAnswerId;
			};
		};

		return ['$scope', 'stepService', '$http', ResultController];
	});
}());



