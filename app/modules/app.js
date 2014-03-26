/**
 *	SaasManager v2.1.1
 *	@author Jakub Mach
 *	@date 26.03.2014r
 */
angular.module('navigationRules', [
	'urls',
	'navrules-program'
]);



/**
 *	@name safe
 *	@description
 *	This is filter for injecting HTML into a DIV. In the ng-bind-html use
 *	filter safe.
 *
 *	@example
 *	<div ng-bind-html="item.description | safe"></div>
 */
angular.module('navigationRules')
	.filter('safe', ['$sce', function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}]);
