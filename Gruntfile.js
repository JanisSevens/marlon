
module.exports = function(grunt) {

grunt.initConfig({
  concat: {
    js: {
      src: ['src/1.js', 'src/2.js'],
      dest: 'build/script.js',
    },
      css: {
      	src: ['css/main.css', 'css/theme.css'],
        dest: 'build/styles.css',
      },
  },
    watch: {
  js: {
    files: ['js/**/*.js'],
    tasks: ['concat:js'],

  },
  css: {
    files: ['css/**/*.css'],
    tasks: ['concat:css'],

  },  
},
});

	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat','watch']);
};