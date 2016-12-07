const dictionaryObject = require('./extractDictionary.js');
const danteMarchovObject = require('./extractText.js');


const arrayOfDanteWords = Object.keys(danteMarchovObject)
    let notInDictionary = []
    let danteInDictionary = {}
    for (let i = 0; i < arrayOfDanteWords.length; i++) {
        let withoutPunct = arrayOfDanteWords[i].replace(/[^\w]+/ig, '')
        let currentWord = arrayOfDanteWords[i]

        if (dictionaryObject.hasOwnProperty(withoutPunct.toUpperCase())) {
                            //currentWord
            danteInDictionary[currentWord] = danteMarchovObject[currentWord]
        } else {
            notInDictionary.push(withoutPunct)
        }
    }
    //use syllable rules to append dictionaryObject with words from notInDictionary
    //use danteMarchovObject

module.exports = danteInDictionary;
