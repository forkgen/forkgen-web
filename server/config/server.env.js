'use strict';

module.exports = {
	"server": {
		"dev": {
			"port": "9000",
			"uri": "localhost",
			"codebase": "../client"
		},
		"prod": {
			"port": "8000",
			"uri": "localhost",
			"codebase": "../client/prod"
		}
	},
	"api": {
		"v1": "v1"
	}
};