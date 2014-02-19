module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true,
                files: ['cdd/**/*.css'],
            },
            compass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass:dev'],
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            },
            prod: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    environment: 'production',
                    outputStyle: 'compressed'
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('prod', ['compass:prod']);

};