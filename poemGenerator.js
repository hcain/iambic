'use strict'
const danteInDictionary = require('./matchDanteAndDictionary.js');
const dictionaryObject = require('./extractDictionary.js');


function formatWord (word) {
  let formattedWord = word.replace(/[\W\d_]+/g, '').toUpperCase();
  return formattedWord;
}

function randomWordIndex (arr) {
  let index = Math.floor(Math.random() * arr.length);
  return index;
}

function checkStress (word) {
  if (!word) return null;
  let wordSyllables = dictionaryObject[formatWord(word)];
  if (wordSyllables === undefined) return null;
  let wordStress = wordSyllables.match(/[0-9]+/ig).join('');
  return wordStress;
}

function getFirstWord (input) {
  if (input) {
    // remove any non letter
    let word = input.replace(/[\W\d_]+/g, '');

    //future improvements: add more proper nouns
    if (word !== 'I' && word !== 'God' ) {
      word = word.toLowerCase();
    }

    if (danteInDictionary.hasOwnProperty(word)) {
      return word[0].toUpperCase() + word.slice(1);
    }
  }

  // if word is not viable or in danteInDictionary
  return 'The';
}

function getRandomWord () {
  // length of danteInDictionary
  let count = 0;
  for (let key in danteInDictionary) {
    count++;
  }
  // random 'index' of danteInDictionary
  let index = Math.floor(Math.random() * count);
  for (let newKey in danteInDictionary) {
    if (index > 0) index--;
    else return newKey;
  }
}

function getLastWord (line) {
  let lastSpace = 0;
  let penultimateSpace = 0;
  let endIndex = 0;
    for (let i = 0; i < line.length; i++) {
      if (line[i] === ' ') {
        penultimateSpace = lastSpace;
          lastSpace = i;
        } else if (line[i] === '(') {
          endIndex = i;
          return (line.slice(penultimateSpace + 1, endIndex - 1));
        }
    }
}

function getNextWord(currentWord, counter) {

  if (counter === undefined) { counter = 0 }
  let stressOfCurrent = checkStress(currentWord);
  let newStress;
  let arrayOfNext = danteInDictionary[currentWord];
  let possibleNext;
  let possibleStress;

  //error handling
  if (arrayOfNext) {
    possibleNext = arrayOfNext[randomWordIndex(arrayOfNext)];
    possibleStress = checkStress(possibleNext);
  } else {
    return getNextWord(getRandomWord());
  }

  if (stressOfCurrent === null) {
    return getNextWord(getRandomWord());

  } else if (counter > 10) {
    if (possibleStress === null) {
      return getNextWord(getRandomWord());
    } else {
      return possibleNext;
    }

  } else if (checkStress(possibleNext) === null) {
    counter++;
    return getNextWord(currentWord, counter);
  }

  //compare stresses
  if (stressOfCurrent.slice(-1) === 0) newStress = 1;
  else newStress = 0;

  // use a 2 stress as a 1 stress
  // future improvements: include logic to utilize 1 < 2 for stress
  //  will need to look at backwards stresses, not just the preceding one
  if (possibleStress[0] === 2) possibleStress[0] = 1;

  if (Number.parseInt(possibleStress[0], [10]) === Number.parseInt(newStress, [10]) ) {
    return possibleNext;
  } else {
    counter++;
    return getNextWord(currentWord, counter);
  }
}

function getLine(currentWord, start) {
  let currentLine = '';
  let currentLineStress = '';
  if (start === true) {
    currentWord = getFirstWord(currentWord);
    currentLine = currentWord;
    currentLineStress = (checkStress(currentWord));
  }

  while (currentLineStress.length < 10 ) {
    currentWord = getNextWord(currentWord);
    currentLine += ' ' + currentWord;
    currentLineStress += (checkStress(currentWord));
  }
  return currentLine + ' (' + currentLineStress + ')<br>';
}

function getPoem (startWord) {
  let poemLines = '';
  let numLines = 0;
  let currentWord;
  let line;
  while (numLines < 10) {

    if (numLines === 0) {
      currentWord = startWord;
      line = getLine(currentWord, true);

    } else {
      line = getLine(currentWord, false);
    }

    numLines++;
    poemLines += line;
    currentWord = getLastWord(line);

  }
  return poemLines;
}


module.exports = getPoem;

