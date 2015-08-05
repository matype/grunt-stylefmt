module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    clean: {
      tests: ['tmp']
    },

    cssfmt: {
      format: {
        files: {
         'tmp/output.css': ['test/fixtures/input.css']
        }
      }
    }

  });

  grunt.loadTasks('tasks');
  grunt.registerTask('test', ['clean', 'cssfmt']);
  grunt.registerTask('default', ['test']);

};
