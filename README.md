# grunt-cssfmt [![Build Status](https://travis-ci.org/morishitter/grunt-cssfmt.svg)](https://travis-ci.org/morishitter/grunt-cssfmt)


> Grunt plugin for [CSSfmt](https://github.com/morishitter/cssfmt)

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssfmt --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssfmt');
```

## The "cssfmt" task

### Overview
In your project's Gruntfile, add a section named `cssfmt` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssfmt: {
    format: {
      files: {
       'dest/output.css': ['src/input.css']
      }
    },
  },
})
```

## License
Copyright (c) 2015 Masaaki Morishita. Licensed under the MIT license.
