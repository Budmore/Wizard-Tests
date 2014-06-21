module.exports = function(grunt) {
	'use strict';

	// grunt plugin
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Project configuration.
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '0.0.0.0',
					base: './app/',
					livereload: true,
				}
			}
		},

		less: {
			dev: {
				options: {
					// compress: true,
					// yuicompress: true,
					// optimization: 2
				},
				files: {
					'app/styles/css/styles.css': 'app/styles/less/styles.less'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			styles: {
				files: ['app/styles/less/**/*.less'],
				tasks: 'less:dev'
			}
		}

	});

	// Default task(s).
	grunt.registerTask('default', ['connect','watch']);

	grunt.registerTask('serve', function () {

		grunt.task.run([
			'connect',
			'watch'
		]);
	});
};
