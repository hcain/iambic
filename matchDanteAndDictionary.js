const dictionaryObject = require('./extractDictionary.js');
const danteMarchovObject = require('./extractText.js');


const arrayOfDanteWords = Object.keys(danteMarchovObject)
    let notInDictionary = []
    let danteInDictionary = {}
    for (let i = 0; i < arrayOfDanteWords.length; i++) {
        let withoutPunct = arrayOfDanteWords[i].replace(/[\W\d_]+/g, '')
        let currentWord = arrayOfDanteWords[i]

        if (dictionaryObject.hasOwnProperty(withoutPunct.toUpperCase())) {
                            //currentWord
            danteInDictionary[withoutPunct] = danteMarchovObject[currentWord]
        } else {
            notInDictionary.push(withoutPunct)
        }
    }

    // future improvements:
    // use syllable rules to append dictionaryObject with words from notInDictionary
    // use danteMarchovObject

    //include punctuation

module.exports = danteInDictionary;
