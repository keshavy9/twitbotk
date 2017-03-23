
console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var params = { 
  q: 'unbox',        //you can add the search query over here
  count: 5      // no. of times the query is to be processed
}

T.get('search/tweets', params, gotData); 

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);  	
  }
}