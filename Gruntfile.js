/*
* grunt-mm-packer
* https://github.com/MM56/grunt-mm-packer
*
* Copyright (c) 2016 Gil Polguère
* Licensed under the MIT license.
*/

"use strict";

module.exports = function(grunt) {

	grunt.initConfig({
		clean: {
			default: {
				src: ["examples/output"]
			}
		},

		mm_packer: {
			test1: {
				src: ["examples/assets/*"],
				dest: "examples/output",
				options: {
					name: "pack"
				}
			},
			test2: {
				files: {
					"examples/output": ["examples/assets/*"]
				}
			},
			test3: {
				files: [
					{ src: ["examples/assets/*"], dest: "examples/output" }
				]
			},
		},

	});

	grunt.loadTasks("tasks");
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask("test1", ["clean", "mm_packer:test1"]);
	grunt.registerTask("test2", ["clean", "mm_packer:test2"]);
	grunt.registerTask("test3", ["clean", "mm_packer:test3"]);
	grunt.registerTask("default", ["test1"]);

};
