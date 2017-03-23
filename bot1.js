console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);
tweetit();
// setInterval(tweetit, 1000*60*5);  // you can add an interval between your posts

function tweetit(){
var tweet = {
  status: '#learning to make twitter bot'
}

T.post('statuses/update', tweet, tweeted); // call to the twitter statuses update function, tweet function & callback function tweeted

function tweeted(err, data, response) {
  if (err) {
  	console.log("Something went wwrong!");
  } else {
    console.log("It worked!");
  }
}
}