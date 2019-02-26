const Twit = require('twit'); // ES6 not supported by nodeJS
const config = require('./config');

console.log("hello");

// making a new Twit object
let T = new Twit(config); // importing api keys from separate files

//---------------------------------------------------------------------------------

/**
 * GET request to API
 * prints the text of the tweets found
 */

let getParams = { 
    q: 'nerdCubed',
    lang: 'en', 
    count: 10
};

function getData(err, data, response) {
    let tweets = data.statuses;
    for (let i = 0; i < tweets.length; i++) {
        //console.log(tweets[i].text);
    }
};

//T.get('search/tweets', getParams, getData);

//---------------------------------------------------------------------------------

/**
 * POST request to API
 */

let tweet = {
    // the status needs to be unique
    status: '#codingrainbow following this tutorial' 
};

function tweeted(err, data, response) {
    if (err) {
        console.log("Something went wrong");
        // do error log
    } else {
        console.log("It worked!!");
    }
};

T.post('statuses/update', tweet, tweeted);