/*
 * grunt-mm-packer
 * https://github.com/MM56/grunt-mm-packer
 *
 * Copyright (c) 2016 Gil Polguère
 * Licensed under the MIT license.
 */

'use strict';

var packer = require("mm-packer");

module.exports = function(grunt) {

	var execSync = require('child_process').execSync;

	var exec = function(cmd) {
		var buffer = execSync(cmd);
		return buffer.toString('utf-8');
	};

	grunt.registerMultiTask('mm_packer', 'The best Grunt plugin ever.', function() {
		var options = this.options({
			name: "images"
		});
		this.files.forEach(function(fileConfig) {
			fileConfig.src.forEach(function(filePath) {
				if(grunt.file.isDir(filePath)) {
					var folderName = filePath.substr(filePath.lastIndexOf('/') + 1) || filePath;
					var cleanDest = fileConfig.dest;
					if(cleanDest.lastIndexOf("/") == cleanDest.length - 1) {
						cleanDest = cleanDest.substr(0, cleanDest.length - 1);
					}
					var finalFolder = cleanDest + "/" + folderName;
					grunt.file.mkdir(finalFolder);
					packer(filePath, finalFolder, options.name);
				}
			});
		});
	});

};
