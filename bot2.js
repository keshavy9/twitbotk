console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

// Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow', followed);

function followed(event) {
  console.log("Follow event!");
  var name = event.source.name;
  var screenName = event.source.screen_name;
  tweetIt('.@' + screenName + ' thanks for following me ');
}


function tweetIt(txt) {

	var tweet = {
	  status: txt
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
	  if (err) {
	  	console.log("Something went wwrong!");
	  } else {
	    console.log("It worked!");
	  }
	}
}