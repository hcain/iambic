# Iambic 

A ten-line iambic pentatmeter poem generator from Dante Alighieri's The Divine Comedy.

It utilizes a Markov chain, the Carnegie Mellon University Pronouncing Dictionary, and a recursive fitness algorithm to find the best word match.

### Prerequisites

Node (>=6.x) and npm (>=3.x)

### To Run

```sh
npm install
npm start
```

- Go to localhost:3000 on your browser to see the poem. Each line's stress pattern will be displayed in parentheses at the end of the line.

- To generate another poem, refresh the page.

### Changing the First Word

- To change the first word of the poem, replace 'divine' where indicated in the firstWord.js file, and then save.  If the word is not viable or it is not in syllable dictionary, the generator will default to 'divine'.

- Run (or rerun) Iambic.

- If you wish to change the first word frequently and with ease, I would suggest running with nodemon.  Nodemon will watch and restart the server anytime changes in any of the files, including firstWord.js, are saved.

```sh
npm run start-nodemon
```

