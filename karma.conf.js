'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['browserify', 'jasmine'],

    reporters: ['progress', 'coverage'],

    browsers: ['PhantomJS'],

    coverageReporter: {
      type: 'html',
      dir: 'test/coverage/'
    },

    preprocessors: {
      'src/**/*.js': 'coverage',
      'test/**/*_spec.js': 'browserify'
    },

    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
      'test/**/*_spec.js'
    ]
  });
};
