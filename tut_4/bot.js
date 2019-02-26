const Twit = require('twit'); // ES6 not supported by nodeJS
const config = require('./config');

console.log("hello");

// making a new Twit object
let T = new Twit(config); // importing api keys from separate files


/**
 * get request to API
 * prints the text of the tweets found
 */

let params = { 
    q: 'ESO', 
    count: 2 
};

function gotData(err, data, response) {
    let tweets = data.statuses;
    for (let i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
};

T.get('search/tweets', params, gotData);

