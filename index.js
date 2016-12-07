var path = require('path');
var express = require('express');
var app = express();

module.exports = app;

//start server
app.listen(3000, function(){
    console.log('listening on port 3000')
});


const danteInDictionary = require('./matchDanteAndDictionary.js');
const poem = require('./poemGenerator.js');


app.get('/', function(req, res, next){

    res.send(poem)
})

