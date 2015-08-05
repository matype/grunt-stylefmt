module.exports = function (grunt) {

  var cssfmt = require('cssfmt');

  grunt.registerMultiTask('cssfmt', 'Grunt plugin for CSSfmt', function () {

    var options = this.options ({
      separator: '\n'
    });

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
        return cssfmt.process(cssFile);
      }).join(grunt.util.normalizelf(options.separator));

      grunt.file.write(file.dest, src);

      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
