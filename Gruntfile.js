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
            all: ['src/js/*.js'],
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
                files: ['src/js/**/*.js', 'src/view/*.html', 'src/css/*.css'],
                tasks: ['build']
            },
            tpl: {
                files: ['src/view/*.html'],
                tasks: ['tpl']
            }
        },
        tpl: {
            options: {
                base: 'src/view'
            },
            tpl: {
                src: ['src/view/*.html'],
                dest: 'src/js/view'
            }
        },
        cmd: {
            options: {
                base: 'src/js/',
                shim: {
                    zepto: 'Zepto'
                }
            },
            all: {
                src: ['src/js/**/*.js'],
                dest: 'src/compiled'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src/img/',
                src: '**',
                dest: 'dist/img/'
            }
        },
        pack: {
            css: {
                type: 'css',
                src: ['<%= meta.banner %>', 'src/css/*.css'
                //'public/css/*.css'
                ],
                dest: '<%= cmd.all.dest %>/dist/css/style.css'
            },
            index: {
                type: 'index',
                src: ['src/index.html'],
                dest: '<%= cmd.all.dest %>/../dist/index.html'
            },
            app: {
                type: 'js',
                options: {
                    base: '<%= cmd.all.dest %>'
                },
                src: ['<%= meta.banner %>', '<%= cmd.all.dest %>/seajs/sea.js', '<%= cmd.all.dest %>/seajs/plugin-*.js', '<%= cmd.all.dest %>/lib/*.js', '<%= cmd.all.dest %>/tpl/*.js', '<%= cmd.all.dest %>/core/*.js', '<%= cmd.all.dest %>/**/*.js'],
                ignore: ['<%= cmd.all.dest %>/seajs/*.js', '<%= cmd.all.dest %>/lib/*.js'],
                dest: '<%= cmd.all.dest %>/dist/js/app.js'
            }
        },
        // server: {
        //     publicDir: 'public',
        //     staticMapping: {
        //         '/public': 'public'
        //     },
        //     // testPath: '/test',
        //     port: 5000,
        //     debug: true
        // }
    });
    // grunt.loadTasks('tasks');
    var path = require('path'),
        keys = Object.keys;
    // preprocess template in options
    // default template delimiters are <% %>

    function processOptions(opt) {
        keys(opt).forEach(function (key) {
            var value = opt[key];
            if (typeof value === 'string') {
                opt[key] = grunt.template.process(value);
            } else if (Array.isArray(value)) {
                opt[key] = value.slice().map(function (i) {
                    return grunt.template.process(i);
                });
            }
        });
    }

    function process(options, callback) {
        processOptions(options);
        var config = options.config,
            base = config.base,
            src = grunt.file.expand(options.src),
            dest = options.dest;
        src.forEach(function (file) {
            var code = grunt.file.read(file),
                output;
            code = text2cmd(code);
            output = base ? path.resolve(dest, path.relative(base, file)) : path.join(dest, path.basename(file));
            output = output.replace(/\.[^.]+$/, '.js');
            grunt.file.write(output, code);
        });
        callback && callback();
    }

    function text2cmd(text) {
        return 'define(function (require, exports, module) {\n' + '    module.exports=' + JSON.stringify(text) + ';\n' + '});';
    }

    grunt.task.registerMultiTask('tpl', 'Convert tpl files to cmd modules.', function () {
        if (this.target === 'config') {
            return;
        }
        var done = this.async(),
            config = grunt.config('tpl').options,
            options = Object.create(this.data, {
                config: {
                    value: config || {}
                }
            });
        process(options, done);
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // public tasks
    //grunt.registerTask('test', ['jshint', 'server:noasync', 'qunit']);
    //grunt.registerTask('build', ['jshint', 'tpl', 'cmd', 'copy', 'pack']);
    grunt.registerTask('default', ['tpl']);
};