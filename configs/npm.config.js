(function() {

	/**
	 * NPM's configuration setup.
	 *
	 * Support you want to use [nodegit] in some another file, Do the following
	 *
	 * Include it using following Syntax:
	 * var nodegit = require('../../config/npm.config').nodegit;
	 *
	 */

	'use strict';

	/**
	 * nodegit: Native Node bindings to Git.
	 *
	 * More info: https://github.com/nodegit/nodegit
	 */
	var nodegit = require('nodegit');
	exports.nodegit = nodegit;

	/**
	 * Joi: Object schema description language and validator for JavaScript objects.
	 *
	 * More info: https://github.com/hapijs/joi
	 */
	var joi = require('joi');
	exports.joi = joi;

})();