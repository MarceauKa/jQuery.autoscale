module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			minifyJS: {
				files: {
					'jquery.autoscale.min.js': ['jquery.autoscale.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};