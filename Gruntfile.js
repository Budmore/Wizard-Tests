module.exports = function(grunt) {

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
					base: '.',
					// keepalive: true,
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
					"app/styles/css/bootstrap.css": "app/styles/less/bootstrap.less",
					"app/styles/css/smartadmin-production.css": "app/styles/less/smartadmin-production.less",
					"app/styles/css/custom.css": "app/styles/less/custom.less",
					"app/styles/css/overrides.css": "app/styles/less/overrides.less"
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
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('server', ['connect','watch']);
};
