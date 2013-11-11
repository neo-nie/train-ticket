/**
 * Gruntfile for Elf Project
 */

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        jshint: {
            all: ['public/js/*.js'],
            options: {
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                quotmark: 'single',
                undef: true,
                unused: true,
                strict: true,
                trailing: true,
                eqnull: true,
                es5: false,
                browser: true,
                devel: true,
                jquery: true,
                node: true,
                predef: ['seajs', 'define'],
                white: false
            }
        },
        watch: {
            build: {
                files: ['public/js/**/*.js', 'public/tpl/*.tpl', 'public/css/*.css'],
                tasks: ['build']
            },
            tpl: {
                files: ['public/tpl/*.tpl'],
                tasks: ['tpl']
            }
        },
        tpl: {
            options: {
                base: 'public/tpl'
            },
            tpl: {
                src: ['public/tpl/*.tpl'],
                dest: 'public/js/tpl'
            }
        },
        cmd: {
            options: {
                base: 'public/js/',
                shim: {
                    zepto: 'Zepto'
                }
            },
            all: {
                src: ['public/js/**/*.js'],
                dest: 'public/compiled'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'public/img/',
                src: '**',
                dest: 'public/dist/img/'
            }
        },
        pack: {
            css: {
                type: 'css',
                src: ['<%= meta.banner %>', 'public/encss/*.css'
                //'public/css/*.css'
                ],
                dest: '<%= cmd.all.dest %>/../dist/encss/style.css'
                //dest: '<%= cmd.all.dest %>/../dist/css/style.css'
            },
            index: {
                type: 'index',
                src: ['public/tpl/index-release.html'],
                dest: '<%= cmd.all.dest %>/../dist/index.html'
            },
            app: {
                type: 'js',
                options: {
                    base: '<%= cmd.all.dest %>'
                },
                src: ['<%= meta.banner %>', '<%= cmd.all.dest %>/seajs/sea.js', '<%= cmd.all.dest %>/seajs/plugin-*.js', '<%= cmd.all.dest %>/lib/*.js', '<%= cmd.all.dest %>/tpl/*.js', '<%= cmd.all.dest %>/core/*.js', '<%= cmd.all.dest %>/**/*.js'],
                ignore: ['<%= cmd.all.dest %>/seajs/*.js', '<%= cmd.all.dest %>/lib/*.js'],
                dest: '<%= cmd.all.dest %>/../dist/js/app.js'
            }
        },
        server: {
            publicDir: 'public',
            staticMapping: {
                '/public': 'public'
            },
            // testPath: '/test',
            port: 5000,
            debug: true
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // public tasks
    grunt.registerTask('test', ['jshint', 'server:noasync', 'qunit']);
    grunt.registerTask('build', ['jshint', 'tpl', 'cmd', 'copy', 'pack']);
    grunt.registerTask('default', ['server']);
};