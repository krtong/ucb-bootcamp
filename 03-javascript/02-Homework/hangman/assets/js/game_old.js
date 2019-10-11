//create a hangman Gamepad

// promt asking if the user would like to play vs human or computer.

let opponent = confirm('Would you like to play against a human or computer? (okay = human | cancel = computer)') //true = human false = computer
let word = "";

//generate the word the user will be guessing.
if (opponent) {
    word = prompt('Please enter the word you would like your opponent to guess.').toLowerCase()
} else {
    let words = ['calculator', 'disasterous', 'evaporate', 'troubled', 'grandmother', 'approval', 'unarmed', 'console', 'broadcast', 'temporary', 'breakfast', 'workable', 'opposite', 'talk', 'acceptable', 'ladybug', 'title', 'price', 'galvanize', 'trinity', 'Zuckerberg', 'railway', 'commons', 'impel', 'dogma', 'boundless', 'tactile']
    word = words[Math.floor(Math.random() * Math.floor(words.length - 1))].toLowerCase()
}
console.log(word);
//display a blank array showing the number of
let board = Array(word.length).fill(' _ ');
let hp = 5;
let badGuesses = [];

while (board.indexOf(' _ ') >= 0 && hp > 0) {

    //show the board and any guesses they got wrong.
    if (hp < 5) {
        alert(`   Board: ${board} | Bad guesses: ${badGuesses}`)
    } else alert(`Board: ${board}`)

    //ask what letters they would like to guess.
    let guess = prompt('what letter would you like to guess?');
    let wrong = word.indexOf(guess) < 0;
    [...word].forEach((l, i) => {if (guess === l){board[i] = l}});


    //if there's no match.
    if (wrong) {
        hp--;
        badGuesses.push(guess);
        alert(`Your health is ${hp}/5`);
    }

}

if (hp > 0) alert('You won!');
else alert(`you lose! the word was '${word}'`);