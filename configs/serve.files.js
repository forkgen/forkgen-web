(function() {
	'use strict';

	module.exports = {
		"path": {
			"html": {
				"gateway": {
					"src": ["./client/*.html"]
				},
				"templates": {
					"src": ["./client/app/**/*.html", "./client/components/**/*.html"]
				}
			},
			"json": {
				"src": ["./*.json"]
			},
			"js": {
				"src": ["./*.js", "./configs/*.js", "./client/app/**/*.js", "./client/components/**/*.js"]
			},
			"jscs": {
				"src": ["./*.js", "./configs/*.js", "./client/app/**/*.js", "./client/components/**/*.js"]
			},
			"sass": {
				"src": ["./client/stylesheets/less/_consolidate.less"],
				"dest": "./client/stylesheets/css/"
			}
		}
	};
})();