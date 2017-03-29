# Iambic 

A ten-line iambic pentatmeter poem generator from Dante Alighieri's The Divine Comedy. 
It utilizes a Markov chain, the Carnegie Mellon University Pronouncing Dictionary, and a recursive fitness algorithm to find the best word match.

### Prerequisites

Node (>=6.x) and npm (>=3.x)

### To Run

- Iambic does not require any dependencies to run, so 'npm start' should suffice.
```sh
npm start
```

- Go to localhost:3000 on your browser to see the poem. Each line's stress pattern will be display in parentheses at the end of the line.

- To generate another poem, refresh the page.

### Changing the First Word

- To change the first word of the poem, replace 'divine' in the firstWord.js file where indicated, and then save.

- If the word is not viable or it is not in syllable dictionary, the generator will default to 'divine'.

### Changing the First Word A LOT

- If you wish to change the first word frequently and with ease, I would suggest installing the dev-dependancies in order to run nodemon.

```sh
npm install --only=dev
npm run start-dev
```
Nodemon will watch and restart the server anytime changes are made in any of the files, including firstWord.js, are saved.

