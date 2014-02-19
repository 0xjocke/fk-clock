module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true,
                files: ['css/**/*.css'],
            },
            compass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass:dev'],
            },
            uglify: {
                files: ['js/jquery.nouislider.min.js', 'js/script.js'],
                tasks: ['uglify:prod']
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
        },
        uglify: {
            prod: {
                files: {
                    'js/build/script.min.js': ['js/jquery.nouislider.min.js', 'js/script.js']
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('prod', ['compass:prod', 'uglify:prod']);

};