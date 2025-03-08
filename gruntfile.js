module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/styles/base.css': 'src/styles/base.scss',
                    'dist/styles/module.css': 'src/styles/module.scss',
                    'dist/styles/layout.css': 'src/styles/layout.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/styles/*.scss'],
                tasks: ['sass']
            }
        }
    })


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
}



