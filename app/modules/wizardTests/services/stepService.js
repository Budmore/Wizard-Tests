(function() {
	'use strict';
	define([], function() {

		var stepService = function($q) {
			var self = this;

			/**
			 *	@name model.steps
			 *
			 *	@description
			 *	This is concept of keeping model in service with setter and getter
			 */

			function ModelConstructor() {

				var model = {
					data: undefined
				};

				return {
					getModel: function() {
						return model;
					},
					setModel: function(data) {
						model.data = data;
					}
				};
			}

			this.steps = new ModelConstructor();
			this.result = new ModelConstructor();




			this.getSteps = function() {

				var deferred = $q.defer();

				navrulesResource.getSteps(
					function(data) {
						self.steps.setModel(data);
						deferred.resolve(data);
					}, function(reason) {
						deferred.reject(reason);
					}
				);

				return deferred.promise;

			};


		};

		return ['$q', stepService];

	});
}());
