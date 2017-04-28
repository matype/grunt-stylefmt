module.exports = function (grunt) {

  var stylefmt = require('stylefmt');

  grunt.registerMultiTask('stylefmt', 'Grunt plugin for stylefmt', function () {
    var done = this.async(),
        options = this.options();
    
    this.files.forEach(function (file) {
      var src = file.src.filter(function (filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        var cssFile = grunt.file.read(filepath);
        stylefmt.process(cssFile, options).then(function (result) {
          grunt.file.write(file.dest, result.css);
          grunt.log.writeln('File "' + file.dest + '" created.');
          done();
        }, function(error) {
          grunt.log.error(error);
          done(error);
        });
      });    
    });
  });
};
