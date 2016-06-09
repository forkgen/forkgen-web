'use strict';

import express from 'express';
import { Repository } from 'nodegit';

let router = express.Router();

router.post('/init', (req, res, next) => {
	let reqBody = req.body;

	Repository.init(reqBody.localRepoPath, Number(reqBody.isBareRepo)).then((repository) => {
		res.status(200).json({
			"status": true,
			"responseMsg": "Repository created at the location '" + reqBody.localRepoPath + "'",
		});
	});
});

module.exports = router;
