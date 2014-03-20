angular.module('navrules-program').controller('StepController', ['$scope', 'modelHelper', '$exceptionHandler',
	function($scope, modelHelper, $exceptionHandler) {
		'use strict';
		var self=this;

		this.getSteps = function() {
			modelHelper.getSteps().then(function() {
				$scope.steps = modelHelper.getModel();
				$scope.stepNr = 1;
				$scope.nextStep();
			}, function(reason) {
				$exceptionHandler(reason);
			});
		};

		this.activeStep = function(nrStep) {
			$scope.step = $scope.steps[nrStep - 1];
			console.log($scope.step);

			$scope.imageUrl = $scope.step.imageUrl.question;
			$scope.showOutline = false;
			$scope.showNavRule = false;
		};

		$scope.nextStep = function() {
			console.log('nextStep', $scope.stepNr, $scope.steps.length);
			self.activeStep($scope.stepNr);

			if ($scope.stepNr < $scope.steps.length) {
				$scope.stepNr += 1;
			}
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
			console.log('clicked');
			$scope.showRule = !$scope.showRule;
		};

		(function() {
			self.getSteps();
		})();

	}
]);


