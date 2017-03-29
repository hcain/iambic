
const fs = require('fs');
var path = require('path');
const danteFilePath = path.join(__dirname, 'TextFiles/dante');


// this code was used to convert pdf to text file:
// const dantePDF = path.join(__dirname, 'dante.pdf');
//  var pdftotext = require('pdftotextjs'),
//     pdf = new pdftotext(dantePDF);
//  var data = pdf.getTextSync();
// console.log(data);
// module.exports = data;


//convert text into word bank
const file = fs.readFileSync(danteFilePath, 'utf8');
const danteArray = file.replace(/\s+/g, ' ').split(' ');


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
            } else {
                obj[word] = [nextWord];
            }
        }
    }
    return obj;
}
const danteMarchovObject = marchov(danteArray);

module.exports = danteMarchovObject;
