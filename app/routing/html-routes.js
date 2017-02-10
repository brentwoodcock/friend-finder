var path = require('path');

module.exports = function (app) {
	// HTML GET request for when user visits the survey
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// Default route to home when no route is found
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};