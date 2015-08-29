'use strict';

module.exports = {
	"lint": {
		"rules": {
			"html": {
				"gateway": {
					"doctype-first": true,
					"tag-pair": true,
					"tag-self-close": true,
					"id-unique": true,
					"attr-lowercase": true,
					"doctype-html5": true,
					"head-script-disabled": true
				},
				"templates": {
					"doctype-first": false,
					"tag-pair": true,
					"tag-self-close": true,
					"id-unique": true,
					"attr-lowercase": true,
					"doctype-html5": false,
					"head-script-disabled": true
				}
			},
			"css": {},
			"js": {
				"undef": true,
				"unused": true
			},
			"jscs": {
				"disallowMultipleVarDecl": true,
				"disallowSpacesInsideObjectBrackets": true
			}
		}
	}
};