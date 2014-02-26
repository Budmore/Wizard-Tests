module.exports = function (config) {
  config.set({
    basePath: '../',

    files: [
		'js/lib/angular/angular.js',
		'js/lib/angular/angular-resource.js',
		'js/lib/angular/angular-mocks.js',
		'js/lib/angular-ui/angular-ui.js',
		'js/lib/angular-ui-bootstrap/ui-bootstrap-tpls-0.6.0.js',

		'js/lib/template/jquery-1.9.1.min.js',
		'js/lib/template/jquery-migrate-1.0.0.min.js',
		'js/lib/template/jquery-ui-1.10.0.custom.min.js',
		'js/lib/template/jquery.ui.touch-punch.js',
		'js/lib/template/bootstrap.min.js',
		'js/lib/template/jquery.cookie.js',
		'js/lib/template/fullcalendar.min.js',
		'js/lib/template/jquery.dataTables.min.js',
		'js/lib/template/excanvas.js',
		'js/lib/template/jquery.flot.min.js',
		'js/lib/template/jquery.flot.pie.min.js',
		'js/lib/template/jquery.flot.stack.js',
		'js/lib/template/jquery.flot.resize.min.js',
		'js/lib/template/jquery.chosen.min.js',
		'js/lib/template/jquery.uniform.min.js',
		'js/lib/template/jquery.cleditor.min.js',
		'js/lib/template/jquery.noty.js',
		'js/lib/template/jquery.elfinder.min.js',
		'js/lib/template/jquery.raty.min.js',
		'js/lib/template/jquery.iphone.toggle.js',
		'js/lib/template/jquery.uploadify-3.1.min.js',
		'js/lib/template/jquery.gritter.min.js',
		'js/lib/template/jquery.imagesloaded.js',
		'js/lib/template/jquery.masonry.min.js',
		'js/lib/template/jquery.knob.js',
		'js/lib/template/jquery.sparkline.min.js',
		'js/lib/template/custom.js',

		'js/lib/jqPlot/jquery.jqplot.min.js',
		'js/lib/jqPlot/plugins/jqplot.barRenderer.min.js',
		'js/lib/jqPlot/plugins/jqplot.pieRenderer.min.js',
		'js/lib/jqPlot/plugins/jqplot.donutRenderer.min.js',
		'js/lib/jqPlot/plugins/jqplot.canvasTextRenderer.min.js',
		'js/lib/jqPlot/plugins/jqplot.canvasAxisLabelRenderer.min.js',
		'js/lib/jqPlot/plugins/jqplot.dateAxisRenderer.min.js',
		'js/lib/jqPlot/plugins/jqplot.highlighter.min.js',
		'js/lib/jqPlot/plugins/jqplot.pointLabels.min.js',
		'js/lib/jqPlot/plugins/jqplot.cursor.min.js',
		'js/lib/jqPlot/plugins/jqplot.trendline.min.js',
		'js/lib/jqPlot/plugins/jqplot.enhancedLegendRenderer.develop.js',
		'js/lib/tiny_mce/tiny_mce.js',
		'js/lib/tiny_mce/jquery.tinymce.js',
		'js/lib/select2/select2.min.js',
		'js/lib/sprintf/sprintf.min.js',

		'js/lib/utilities/utilities.js',
		'js/lib/angular/angular-sanitize.js',
		'js/lib/angular-ui/angular-ui.min.js',
		'js/lib/angular-ui/angular-ui-ieshiv.min.js',
		'js/lib/underscore/underscore.js',
		'spec/init.js',
		'spec/lib/jasmine-jquery.js',
		'js/app/config.js',
		'js/app/run.js',
		'js/saas/System/**/*.js',
		'js/applications/**/*.js',
		'js/saas/**/*.js',
		// 'js/locale/**/*.js',
		'js/filter/**/*.js',
		'js/directive/**/*.js',
		'js/**/spec/*.js',
    ],

    frameworks: ['jasmine'],

    autoWatch: true,

    browsers: ['Chrome'],

	plugins:[
		'karma-jasmine',
		'karma-coverage',
		'karma-chrome-launcher'
	],

	preprocessors: {
		'js/saas/**/*.js': 'coverage',
	},

	// with coverage, but with bad line numbers in tests reports
	reporters: ['progress', 'dots', 'coverage'],
	
	// without coverage
	// reporters: ['progress', 'dots'],

	coverageReporter: {
		type : 'html',
		dir : 'coverage/'
	}
  });
};
