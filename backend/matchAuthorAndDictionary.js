'use strict';

const dictionaryObject = require('./extractDictionary.js');
const authorMarchovObject = require('./extractText.js');

// const removePunctuation = (word) => {
//     return word.replace(/[\W\d_]+/g, '')
// }

const checkIfInDictionary = (word) => {
    // console.log(dictionaryObject.hasOwnProperty(word.toUpperCase()))
    return dictionaryObject.hasOwnProperty(word.toUpperCase())
}

const arrayOfAuthorWords = Object.keys(authorMarchovObject)
    const notInDictionary = []
    const authorInDictionary = {}
    for (let i = 0; i < arrayOfAuthorWords.length; i++) {
        let currentWord = arrayOfAuthorWords[i]

        if (checkIfInDictionary(currentWord)) {
             authorInDictionary[currentWord] = []
            for (let j = 0; j< authorMarchovObject[currentWord].length; j++) {
                const nextWord = authorMarchovObject[currentWord][j]
                // console.log(currentWord, nextWord, checkIfInDictionary(nextWord))
                
                if (checkIfInDictionary(nextWord)) {
                    // console.log(authorInDictionary[currentWord])
                    // if (authorInDictionary.hasOwnProperty(currentWord)) {
                        authorInDictionary[currentWord].push(nextWord)
                    // }
                }   
            }
            // if (authorInDictionary[currentWord].length === 0) {
            //     delete authorInDictionary[currentWord]
            // }
        } else {
            notInDictionary.push(currentWord)
            }
    }

    // future improvements:
    // use syllable rules to append dictionaryObject with words from notInDictionary
    // use authorMarchovObject

    //include punctuation

module.exports = authorInDictionary;
