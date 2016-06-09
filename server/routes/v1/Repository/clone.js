'use strict';

import express from 'express';
import { Clone } from 'nodegit';

let router = express.Router();

router.post('/clone', (req, res, next) => {
	let reqBody = req.body;

	Clone.clone(reqBody.CloneURL, reqBody.localRepoPath).then((repository) => {
		res.status(200).json({
			"status": true,
			"responseMsg": "Remote repository '" + reqBody.CloneURL + "' has been cloned at the location '" + reqBody.localRepoPath + "'",
		});
	});

});

module.exports = router;
