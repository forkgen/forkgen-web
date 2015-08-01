'use strict';

var express = require('express'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	path = require('path'),
	http = require('http'),
	fs = require('fs');

var app = express(),
	config = require("./config/server.env");

/**
 * Create a write stream (in append mode)
 */
var accessLogStream = fs.createWriteStream(__dirname + '/' + config.logger.dirname + '/' + config.logger.filename, {
	flags: 'a'
});

/**
 * Setup the logger
 */
app.use(morgan('combined', {
	stream: accessLogStream
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser());

var NODE_ENV = process.env.NODE_ENV || config.server.dev.NODE_ENV;
switch (NODE_ENV.toLowerCase()) {
	case config.server.dev.NODE_ENV.toLowerCase():
		/**
		 * Application configurations for development environment.
		 * NODE_ENV=development node server.js
		 */
		app.set('port', process.env.PORT || config.server.dev.port);
		app.use(express.static(path.join(__dirname, config.server.dev.codebase)));
		break;

	case config.server.prod.NODE_ENV.toLowerCase():
		/**
		 * Application configurations for production environment.
		 * NODE_ENV=production node server.js
		 */
		app.set('port', process.env.PORT || config.server.prod.port);
		app.use(express.static(path.join(__dirname, config.server.prod.codebase)));
		break;
}

app.use('/api/' + config.api.defaults.version + '/repository', require('./routes/' + config.api.defaults.version + '/repositories'));

http.createServer(app).listen(app.get('port'), function() {
	console.log("\n\n\tNode (Express) server listening on port " + app.get('port'));
});