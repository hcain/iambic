'use strict'
const danteInDictionary = require('./matchDanteAndDictionary.js');
const dictionaryObject = require('./extractDictionary.js');



function formatWord (word) {
    let formattedWord = word.replace(/[^\w]+/ig, '').toUpperCase()
    //console.log('FORMATTED WORD', formattedWord)
    return formattedWord
}

function randomWordIndex (arr) {
        let index = Math.floor(Math.random() * arr.length)
        return index
}

function checkStress (word) {
    if (word === undefined) {return null}
    let wordSyllables = dictionaryObject[formatWord(word)];
    if (wordSyllables === undefined) {return null}
    let wordStress = wordSyllables.match(/[0-9]+/ig).join('');
    return wordStress;
}

function getFirstWord (input) {
    if (danteInDictionary.hasOwnProperty(input.replace(/[^\w]+/ig))) {
        return input.replace(/[^\w]+/ig)
    } else {
        return 'The'
    }
}

function getRandomWord () {
    //length of danteInDictionary
    let count = 0
    for (let key in danteInDictionary) {
        count++
    }
    //random 'index' of danteInDictionary
    let index = Math.floor(Math.random() * count)
    for (let newKey in danteInDictionary) {
        if (index > 0) {
            index--
        }
        else {
            console.log('NEW KEY', newKey.replace(/[^\w]+/ig))
            return newKey
        }

    }
}

function getLastWord (line) {
    // console.log(poem.match(/\s(\w+)$/))
    // return poem.match(/\s(\w+)$/)
    let lastSpace = 0;
    let penSpace = 0;
    let endIndex = 0;
        for (let i = 0; i < line.length; i++) {
            if (line[i] === ' ') {
                penSpace = lastSpace;
                lastSpace = i;
                //console.log(penSpace, 'PENSPACE')
            } else if (line[i] === '(') {
                 endIndex = i;
                 console.log('SLICE', penSpace, endIndex, line.slice(penSpace + 1, endIndex))
                 return (line.slice(penSpace + 1, endIndex - 1))
            }
        }
}

function getNextWord(currentWord, counter) {
    if (counter === undefined) { counter = 0 }
    let stressOfCurrent = checkStress(currentWord);
    let newStress;
    console.log('BEFORE ARRAY OF NEXT', currentWord.match(/\w+/ig))
    let arrayOfNext = danteInDictionary[currentWord.match(/\w+/ig)];
    //console.log(arrayOfNext)
    let possibleNext = arrayOfNext[randomWordIndex(arrayOfNext)];
    let possibleStress = checkStress(possibleNext)

    console.log('CURRENT', counter, currentWord, stressOfCurrent)
    console.log('POSSIBLE', possibleNext, possibleStress)

    //error handling
    if (stressOfCurrent === null) {
        return getNextWord(getRandomWord())

    } else if (counter > 20) {
       // console.log('RETURNS VIA COUNTER', possibleNext)
        if (possibleStress === null) {
            return getNextWord(getRandomWord());
        }
        else {
            console.log('NEXT WORD', possibleNext.match(/[^"']+/ig))
            return possibleNext
        }

    } else if (checkStress(possibleNext) === null) {
        counter++
        return getNextWord(currentWord, counter)
    }


    //compare stresses
    if (stressOfCurrent.slice(-1) === 0) {
        newStress = 1;
    } else {
        newStress = 0;
    }
    //console.log('NEW STRESS', newStress)
    if (possibleStress[0] === 2) {
        possibleStress[0] = 1;
    } else if (Number.parseInt(possibleStress[0], [10]) === Number.parseInt(newStress, [10]) ) {
        console.log('ADDS', possibleNext)
        return possibleNext;
    } else {
        counter++
        return getNextWord(currentWord, counter)
    }
}

function getLine(currentWord, start) {
    let currentLine = ''
    let currentLineStress = ''
    if (start === true) {
        currentWord = getFirstWord(currentWord);
        currentLine = currentWord;
        currentLineStress = (checkStress(currentWord))
    }
    //console.log('CURRENTLINE', currentLine, currentLineStress)
    while (currentLineStress.length < 10 ) {
        currentWord = getNextWord(currentWord);
        currentLine += ' ' + currentWord;
        currentLineStress += (checkStress(currentWord))
        //currentLineStress = currentLineStress
        //console.log('LINESTRESS', currentLineStress)

    }
    return currentLine + ' (' + currentLineStress + ')<br>'

}

function getPoem (startWord) {
    let poemLines = ''
    let numLines = 0
    let currentWord
    let line
    while (numLines < 10) {
        //console.log('CURRENTWORD NEWLINE', currentWord)
        //console.log(poemLines, 'POEM')
        if (numLines === 0) {
            currentWord = startWord;
            line = getLine(currentWord, true)
        } else {
            line = getLine(currentWord, false)
        }
        numLines++
        poemLines += line
        currentWord = getLastWord(line)
        //console.log('CURRENTWORD AT ENDLINE', currentWord)
    }
    return poemLines;
}
let poem = getPoem("Then")
//let poem = getLine() + getLine()
//let poem = getFirstWord() + '(' + checkStress(getFirstWord()) + ') ' + nextWord + '(' + checkStress(nextWord) + ')' + thirdWord + '(' + checkStress(thirdWord) + ')';


module.exports = poem;
