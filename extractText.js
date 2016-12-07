
const fs = require('fs');
var path = require('path');
const danteFilePath = path.join(__dirname, 'TextFiles/dante');

//code used to convert pdf to text file (only needed once)

//const dantePDF = path.join(__dirname, 'dante.pdf');
// var pdftotext = require('pdftotextjs'),
//     pdf = new pdftotext(dantePDF);
// var data = pdf.getTextSync();
// console.log(data);
//module.exports = data;

//convert text into word bank
const file = fs.readFileSync(danteFilePath, "utf8");
const danteArray = file.replace(/\s+/g, ' ').split(' ');

//(/\s+/g, ' ')


//convert into marchov chain
const marchov = function (arr) {
    let obj = {};
    // for (let j = 0; j < arr.length; j++) {
    //     arr[j] = arr[j].replace(/[^'.,\b\w]+/ig, '')
    //     //console.log(arr[j]) // /[^\w]+/ig
    // }
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty((arr[i]).replace(/[^\w]+/ig))) {
            //console.log('it was true!')
            obj[(arr[i]).replace(/[^\w]+/ig)].push(arr[i + 1]);
        } else {
            //console.log('sometimes true')
            obj[(arr[i]).replace(/[^\w]+/ig)] = [arr[i + 1]];
        }
    }
    return obj;
} 
const danteMarchovObject = marchov(danteArray);
//console.log(danteMarchov)
module.exports = danteMarchovObject; 





