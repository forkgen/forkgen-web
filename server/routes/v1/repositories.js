'use strict';

var express = require('express');
var router = express.Router();

var nodegit = require('../../../configs/npm.config').nodegit,
	joi = require('../../../configs/npm.config').joi;

router.post('/clone/:username', function(req, res, next) {
	var reqBody = req.body;

	nodegit.Clone(reqBody.repoGitUrl, reqBody.repoName).then(function(repository) {
		res.json({
			"status": "done"
		});
	});

});

module.exports = router;