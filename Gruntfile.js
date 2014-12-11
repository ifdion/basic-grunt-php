'use strict';
module.exports = function(grunt) {
  // Load all tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time
  require('time-grunt')(grunt);

  var pluginList = [
    'bower_components/bootstrap/js/transition.js',
    'bower_components/bootstrap/js/alert.js',
    'bower_components/bootstrap/js/button.js',
    'bower_components/bootstrap/js/carousel.js',
    'bower_components/bootstrap/js/collapse.js',
    'bower_components/bootstrap/js/dropdown.js',
    'bower_components/bootstrap/js/modal.js',
    'bower_components/bootstrap/js/tooltip.js',
    'bower_components/bootstrap/js/popover.js',
    'bower_components/bootstrap/js/scrollspy.js',
    'bower_components/bootstrap/js/tab.js',
    'bower_components/bootstrap/js/affix.js',
  ];

  var vendorList = [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/underscore/underscore.js',
    'bower_components/backbone/backbone.js',
  ];

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '!js/main.js',
        '!**/*.min.*'
      ]
    },
    less: {
      dev: {
        files: {
          'css/main.css': [
            'less/main.less'
          ]
        },
        options: {
          compress: false,
        }
      },
      build: {
        files: {
          'css/main.min.css': [
            'less/main.less'
          ]
        },
        options: {
          compress: true
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      vendors: {
        src: [vendorList],
        dest: 'js/vendors.js',
      },
      plugins: {
        src: [pluginList],
        dest: 'js/plugins.js',
      },
    },
    uglify: {
      plugins: {
        files: {
          'js/plugins.min.js': [pluginList]
        }
      },
      vendors: {
        files: {
          'js/vendors.min.js': [vendorList]
        }
      },
      main: {
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    },
    modernizr: {
      build: {
        devFile: 'bower_components/modernizr/modernizr.js',
        outputFile: 'js/modernizr.min.js',
        files: {
          'src': [
            ['js/vendors.min.js', 'js/plugins.min.js', 'js/main.min.js'],
            ['css/main.min.css']
          ]
        },
        uglify: true,
        parseFiles: true
      }
    },
    watch: {
      less: {
        files: [
          'less/*.less',
          'less/**/*.less'
        ],
        tasks: ['less:dev']
      },
      js: {
        files: [
          pluginList,
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'concat']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'css/main.css',
          'js/main.js',
          '*/*.php',
          '*.php'
        ]
      }
    }
  });

  // Register tasks
  grunt.registerTask('default', [
    'dev'
  ]);
  grunt.registerTask('dev', [
    'jshint',
    'less:dev',
    'concat'
  ]);
  grunt.registerTask('build', [
    'jshint',
    'less:build',
    'uglify',
    'modernizr',
  ]);
};
