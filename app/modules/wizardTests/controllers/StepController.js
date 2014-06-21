(function() {
	'use strict';
	define([], function() {

		var StepController = function($scope, $location, stepService) {

			function getSteps() {
				stepService.getSteps().then(function() {
					$scope.steps = stepService.steps.getModel();
					$scope.stepNr = 0;
					$scope.nextStep();
				}, function() {
					//appMessages.error('aa')
					//$exceptionHandler(reason);
				});
			}

			function activeStep(nrStep) {
				$scope.step = $scope.steps[nrStep - 1];

				$scope.imageUrl = $scope.step.imageUrl.question;
				$scope.showOutline = false;
				$scope.showRule = false;
			}

			$scope.nextStep = function() {
				$scope.showOutline = false;
				$scope.showRule = false;

				if ($scope.stepNr < $scope.steps.length) {
					$scope.stepNr += 1;
				}

				activeStep($scope.stepNr);

				if ($scope.stepNr === $scope.steps.length ){
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

			//TODO: remove this method
			$scope.deb = function() {
				console.log('step', $scope.step);
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

			(function() {
				getSteps();
			})();
		};

		return ['$scope', '$location', 'stepService', StepController];
	});
}());



