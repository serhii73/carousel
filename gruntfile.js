module.exports = function(grunt) {

grunt.initConfig({
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['js/src/*.js'],
      dest: 'js/build/script.main.min.js',
    },
  },
  uglify: {
    dist: {
        src: ['js/build/script.main.min.js'],
        dest: 'js/build/script.main.min.js'
    }   
  },
  concat_css :{
    all: {
        src: ['css/src/*.css'],
        dest: "css/src/main.css"
    }
  },
  cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'css/src',
      src: ['main.css'],
      dest: 'css/build',
      ext: '.min.css'
    }]
  }
}
});


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'concat_css','cssmin']);

};
