let Twit = require('twit');
let config = require('./config');

console.log("hello");

// making a new Twit object
// keys are unique to my test account
let T = new Twit(config); // importing api keys from separate files
