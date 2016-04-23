'use strict';

var express = require('express');
var router = express.Router();

var Git = require('nodegit');
var Repository = Git.Repository;

router.post('/init', function(req, res, next) {
	var reqBody = req.body;

	Repository.init(reqBody.localRepoPath, Number(reqBody.isBareRepo)).then(function(repository) {
		res.status(200).json({
			"status": true,
			"responseMsg": "Repository created at the location '" + reqBody.localRepoPath + "'",
		});
	});
	
});

module.exports = router;