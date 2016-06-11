'use strict'

import express from 'express';
import { Repository } from 'nodegit';

let router = express.Router();

router.post('/open', (req, res, next) => {
	let reqBody = req.body;

	Repository.open(reqBody.localRepoPath)
		.then((repository) => {

			let repoInfo = {};
			repoInfo.isBare = repository.isBare();
			repoInfo.isEmpty = repository.isEmpty();
			repoInfo.repoPath = repository.path();

			res.status(200).json(repoInfo);
		});

});

module.exports = router;
