var path = require('path');
var express = require('express');
var app = express();

module.exports = app;

//start server
app.listen(3000, function(){
    console.log('listening on port 3000')
});


const firstWord = require('./firstWord.js');

app.get('/', function(req, res, next){
    // inside get, so poem will change when refreshed
    const poem = require('./poemGenerator.js');

    res.send(poem(firstWord));
});

