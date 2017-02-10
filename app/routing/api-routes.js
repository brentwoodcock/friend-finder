// Load friends data object
var friendsData = require('../data/friends.js');

// Function that takes in two score arrays and calculates their difference
var compareScores = function(userScores, friendScores) {
	var diff = 0;
	for (var i = 0; i < userScores.length; i++) {
		diff += Math.abs(userScores[i] - friendScores[i]);
	}
	return diff;
}

module.exports = function(app) {
	// API GET request that will display JSON of all possible friends
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});

	// API POST request that handles the data submitted by user
	app.post('/api/friends', function(req, res) {
		var lowestDiff = 9000;
		var matchIdx = -1;
		// Compare the scores of each user's scores in friendsData to request's scores and find the index of the best match
		for (var i = 0; i < friendsData.length; i++) {
			var diff = compareScores(req.body.scores, friendsData[i].scores);
			if (diff < lowestDiff) {
				lowestDiff = diff;
				matchIdx = i;
			}
		}
		// Return the data of the best match
		res.json(friendsData[matchIdx]);
		// Add request's data to friends object
		friendsData.push(req.body);
	})
}