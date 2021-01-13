'use strict';

const fs = require('fs');
const path = require('path');
const authorFilePath = path.join(__dirname, 'TextFiles/poe.txt');


// this code was used to convert pdf to text file:
// var filePath = path.join(__dirname, 'TextFiles/poe.pdf')
// var extract = require('pdf-text-extract')
// extract(filePath, { splitPages: false }, function (err, text) {
//   if (err) {
//     console.dir(err)
//     return
//   }
//   const editedText = text.join('\n', ' ')
//   fs.writeFile('TextFiles/poe.txt', editedText, function (err) {
//     if (err) return console.log(err);})
// })


//convert text into word bank
const file = fs.readFileSync(authorFilePath, 'utf8');
const authorArray = file.replace(/\s+/g, ' ').split(' ');


//convert into marchov chain
const marchov = function (arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] && arr[i + 1]) {

            // remove non-letters
            // future improvements: leave hyphens
            let word = arr[i].replace(/[\W\d_]+/g, '');
            let nextWord = (arr[i + 1]).replace(/[\W\d_]+/g, '');

            // fix case for non-proper nouns
            // future improvements: add more proper nouns
            if (word !== 'I' && word !== 'God') {
                word = word.toLowerCase();
            }
            if (nextWord !== 'I' && nextWord !== 'God') {
                nextWord = nextWord.toLowerCase();
            }

            // add words(s) to Marchov chain
            if (obj.hasOwnProperty(word)) {
                obj[word].push(nextWord);
                // console.log(word, nextWord)
            } else {
                obj[word] = [nextWord];
            }
        }
    }
    return obj;
}
const authorMarchovObject = marchov(authorArray);

module.exports = authorMarchovObject;
