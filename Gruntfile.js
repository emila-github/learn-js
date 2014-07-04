module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: true
      },
      files: ['src/**/*.js']
    },
    qunit: {
    },
    copy: {
      // sea: {
      //   expand: true,
      //   cwd: 'sea-modules/',
      //   src: ['**'],
      //   dest: '_site/sea-modules/'
      // }
    },

    transport: {
      options: {
        debug: true,
        idleading: 'learn-js/',
        paths: ['sea-modules'],
        alias: '<%= pkg.spm.alias %>'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js'],
          dest: '.build/'
        }]
      }
    },
    concat: {
      options: {
        debug: true,
        // include: 'all',
        include: 'relative',
        paths: ['sea-modules']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.build/',
          src: ['**/main.js', '**/main-debug.js'],
          dest: 'dist/'
        }]
      }
    },
    uglify: {
      options: {
        // banner: '/*! <%= pkg.name %>-<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n',
        banner: '/*! <%= pkg.name %>-<%= pkg.version %> */\n',
        beautify: {
          'ascii_only': true
        },
        compress: {
          'global_defs': {
            'DEBUG': false
          },
          'dead_code': true
        }
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['**/main.js', '!**/main-debug.js'],
          dest: 'sea-modules/<%= pkg.name %>/'
        }]
      }
    },
    clean:{
      seajs : {
        src: ['.build/**']
      }
    }


  });


  grunt.registerTask('minify', ['uglify'/*, 'cssmin'*/ ]);

  grunt.registerTask('seajs', ['clean:seajs', 'transport', 'concat', 'clean:seajs']);

  grunt.registerTask('test', ['jshint'/*, 'qunit'*/]);

  grunt.registerTask('build', ['test', 'seajs', 'minify'/*, 'yuidoc'*/]);


  grunt.registerTask('default', ['build']);

};
