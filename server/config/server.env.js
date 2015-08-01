'use strict';

module.exports = {
	"server": {
		"dev": {
			"port": "9000",
			"uri": "localhost",
			"codebase": "../client",
			"NODE_ENV": "development"
		},
		"prod": {
			"port": "8000",
			"uri": "localhost",
			"codebase": "../client/prod",
			"NODE_ENV": "production"
		}
	},
	"api": {
		"defaults": {
			"version": "v1"
		}
	},
	"logger": {
		"dirname": "logs",
		"filename": "access.log"
	}
};