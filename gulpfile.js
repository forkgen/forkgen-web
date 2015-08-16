'use strict';

/**
 * Require 3rd party `npm`.
 */
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	less = require('gulp-less');
	
/**
 * Require built-in `npm`.
 */
var path = require('path');

/**
 * filename and directory paths.
 */
var lessDir = './client/stylesheets/less/',
	cssDir = './client/stylesheets/css/';

/**
 * Setup Less compilation task.
 */
gulp.task('compileLessDev', function() {
	return gulp.src(path.join(lessDir, '_consolidate.less'))
		.pipe(less())
		.on('error', gutil.log)
		.pipe(gulp.dest(cssDir));
});

/**
 * Define sub-tasks : Tasks for Less compilation for development.
 */
gulp.task('less', ['compileLessDev']);
