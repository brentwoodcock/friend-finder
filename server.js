// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express setup
var app = express();
var PORT = process.env.PORT || 8080;

// BodyParser setup so that server can easily interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// Point server to our route files so that server knows to respond when users visit a URL or request data
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Start listening
app.listen(PORT, function() {
	console.log('App listening on PORT: ' + PORT);
});