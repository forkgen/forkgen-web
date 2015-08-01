'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	// res.json({
	// 	user: 'Ashwin'
	// });
});

router.get('/user', function(req, res, next) {
	// res.json({
	// 	user: 'Ashwin Hegde'
	// });
});

module.exports = router;