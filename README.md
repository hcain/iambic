# Iambic 

A ten line iambic pentatmeter poem generator!

### Prerequisites

- Node (>=6.x) and npm (>=3.x)

### To Run

```sh
npm start
```
- Iambic does not need any dependencies to run, so 'start' should suffice.

- Go to localhost:3000 on your browser to see a poem (with the stress at the end of each line).

- To generate another poem, refresh the page.


### Changing the First Word

- To change the first word of the poem, change the word in the firstWord.js file where indicated, and then save.

- If the word is not viable or it is not in syllable dictionary, the generator will default to 'divine'.

### Changing the First Word A LOT

- If you wish to change the first word a lot and with ease, I would suggest installing the dev-dependancies in order to run nodemon.

```sh
npm install --only-dev
npm run start-dev
```
Nodemon will watch and restart the server when any changes in any of the files--including firstWord.js--are saved.

