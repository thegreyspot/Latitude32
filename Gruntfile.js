'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    //main css
    compass: {
        sass: {
            options: {
                //sourcemap: true
            }
        },
        options: {
          require: 'susy',
          sassDir: 'styles/sass',
          imagesDir: 'images/',
          cssDir: 'styles/css',
          environment: 'development',
          relativeAssets: true
        }
    },
    cssmin: {
      combine: {
        files: {
          'styles/css/base.min.css': [
            'styles/css/base.css'
          ],
          'styles/css/base.min.css.map': [
            'styles/css/base.css.map'
          ]
        }
      }
    },
    watch: {
      sass: {
        files: [
          'styles/sass/*.sass',
          'styles/sass/*.scss'
        ],
        tasks: ['compass', 'cssmin']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'styles/css/base.min.css',
          'js/scripts.min.js',
          'templates/*.php',
          '*.php'
        ]
      }
    },
    clean: {
      dist: [
        'styles/css/base.min.css',
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'uglify',
    'compass'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
