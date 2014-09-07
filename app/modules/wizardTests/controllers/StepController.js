(function() {
	'use strict';
	define([], function() {

		var StepController = function($scope, $location, $http, stepService) {
			//
			// TODO: remove mocked data
			//
			$http.get('mockups/model.json').success(function(response) {
				stepService.steps.setModel(response);
				$scope.nextStep();
			});


			$scope.init = function() {
				// $scope.getSteps();
				$scope.stepNr = 0;
				$scope.steps = stepService.steps.getModel();
			};


			/**
			 *	@name getSteps
			 *	@description Get questions and set it to the model.
			 */
			$scope.getSteps = function() {
				stepService.getSteps().then(
                    function success(response) {
                    	stepService.steps.setModel(response);
						$scope.nextStep();
					}, function error() {
						// Handle errors
					}
				);
			};

			function activeStep(nrStep) {
				$scope.step = $scope.steps.data[nrStep - 1];
				$scope.imageUrl = $scope.step.imageUrl.question;
				$scope.showOutline = false;
				$scope.showRule = false;
			}

			$scope.nextStep = function() {
				$scope.showOutline = false;
				$scope.showRule = false;

				if ($scope.stepNr < $scope.steps.data.length) {
					$scope.stepNr += 1;
				}

				activeStep($scope.stepNr);

				if ($scope.stepNr === $scope.steps.data.length ){
					$location.path('/result');
				}
			};

			$scope.prevStep = function() {
				$scope.showOutline = false;
				$scope.showRule = false;

				if ($scope.stepNr > 1 ) {
					$scope.stepNr -= 1;
				}

				activeStep($scope.stepNr);
			};

			$scope.changeImage = function() {

				if ($scope.showOutline) {
					$scope.imageUrl = $scope.step.imageUrl.question;
				} else {
					$scope.imageUrl = $scope.step.imageUrl.outline;
				}
				$scope.showOutline = !$scope.showOutline;
			};

			$scope.showNavigationRule = function() {
				$scope.showRule = !$scope.showRule;
			};

		};

		return ['$scope', '$location', '$http', 'stepService', StepController];
	});
}());



