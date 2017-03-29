
const fs = require('fs');
var path = require('path');
const syllableFilePath = path.join(__dirname, 'TextFiles/syllableDictionary');

const file = fs.readFileSync(syllableFilePath, "utf8");

const dictionaryInitialArray = file.split('\n');

const dictionaryArray = dictionaryInitialArray.filter( (string) => {
    if (!string.includes('(1)')) {
        if (!string.includes('(2)')) {
            if (!string.includes('(3)')) {
                return string;
            }
        }
    }
})

const stringsToObjects = function (arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let newKey = arr[i].match(/^[^\s]+/);
        obj[newKey] = arr[i].slice(newKey.toString().length + 2);
    }
    return obj;
}

const dictionaryObject = stringsToObjects(dictionaryArray);

module.exports = dictionaryObject;
