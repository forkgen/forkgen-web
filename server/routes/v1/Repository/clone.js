'use strict';

var express = require('express');
var router = express.Router();

var Git = require('nodegit');
var Clone = Git.Clone;

router.post('/clone', function(req, res, next) {
	var reqBody = req.body;
	
	Clone.clone(reqBody.CloneURL, reqBody.localRepoPath).then(function(repository) {
		res.status(200).json({
			"status": true,
			"responseMsg": "Remote repository '" + reqBody.CloneURL + "' has been cloned at the location '" + reqBody.localRepoPath + "'",
		});
	});

});

module.exports = router;