'use strict';

const fs = require('fs');
const path = require('path');
var filePath = path.join(__dirname, './poe.pdf')
var extract = require('pdf-text-extract')

// this code was used to convert pdf to text file
// run "node convertPDF.js"

extract(filePath, { splitPages: false }, function (err, text) {
  if (err) {
    console.log(err)
    return
  }
  const editedText = text.join('\n', ' ')
  fs.writeFile('./poe.txt', editedText, function (err) {
    if (err) return console.log(err);})
})