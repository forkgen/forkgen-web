'use strict';

/**
 * Require 3rd party `npm`.
 */
var gulp = require('gulp'),
	util = require('gulp-util'),
	htmlhint = require('gulp-htmlhint'),
	jscs = require('gulp-jscs'),
	jshint = require('gulp-jshint'),
	jsonlint = require("gulp-jsonlint"),
	less = require('gulp-less');

/**
 * Require built-in `npm`.
 */
var path = require('path');

/**
 * Require built-in `configure files`.
 */
var SERVE_RULES = require('./configs/serve.rules'),
	SERVE_FILES = require('./configs/serve.files');

/**
 * Setup htmlhint task.
 */
gulp.task('htmlhint', function() {
	return gulp.src(SERVE_FILES.path.html.gateway.src)
		.pipe(htmlhint(SERVE_RULES.lint.rules.html.gateway))
		.pipe(htmlhint.reporter())
		.on('error', util.log)
});

/**
 * Setup htmlhint for partial templates task.
 */
gulp.task('templateshint', function() {
	return gulp.src(SERVE_FILES.path.html.templates.src)
		.pipe(htmlhint(SERVE_RULES.lint.rules.html.templates))
		.pipe(htmlhint.reporter())
		.on('error', util.log)
});

/**
 * Setup jsonlint task.
 */
gulp.task('jsonlint', function() {
	return gulp.src(SERVE_FILES.path.json.src)
		.pipe(jsonlint())
		.pipe(jsonlint.reporter())
		.on('error', util.log);
});

/**
 * Setup jshint task.
 */
gulp.task('jshint', function() {
	return gulp.src(SERVE_FILES.path.js.src)
		.pipe(jshint(SERVE_RULES.lint.rules.js))
		.pipe(jshint.reporter())
		.on('error', util.log);
});

/**
 * Setup jscs task.
 */
gulp.task('jscs', function() {
	return gulp.src(SERVE_FILES.path.jscs.src)
		.pipe(jscs(SERVE_RULES.lint.rules.jscs))
});

/**
 * Setup less compilation task.
 */
gulp.task('less', function() {
	return gulp.src(SERVE_FILES.path.sass.src)
		.pipe(less())
		.on('error', util.log)
		.pipe(gulp.dest(SERVE_FILES.path.sass.dest));
});

/**
 * Define `default` task
 * 1. Linting of html, templates, json, js, css.
 * 2. Compilation of less files.
 */
gulp.task('default', ['htmlhint', 'templateshint', 'jsonlint', 'jshint', 'jscs', 'less']);

/**
 * Define `build` task
 * 1. Default.
 * 2. Minification, optimization & build creation.
 */
gulp.task('build', ['default']);

/**
 * Define `linthtml` task
 */
gulp.task('linthtml', ['htmlhint', 'templateshint']);

/**
 * Define `lintjs` task
 */
gulp.task('lintjs', ['jsonlint', 'jshint', 'jscs']);

/**
 * Define `lintstyle` task
 */
gulp.task('lintstyle', ['less']);