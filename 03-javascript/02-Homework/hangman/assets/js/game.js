//global variables
//word is an empty string | health counter | wrong guesses begins as empty array | word board begins as empty array.
let [word, livesLeft, wrongGuesses, wordBoard] = ["", 6, [], []];

//helper functions: shortcuts so I don't have to write document.getElementBy(id) etc 20 times...
const div = {
  id: id => document.getElementById(id),
  reset: id => div.id(id).value = "",
  hide: id => div.id(id).style = `display: none;`, 
  show: id => div.id(id).style = `display: ;`, //there is no 'display: show.' If left blank, display will show div by default.
  change: (id, change) => div.id(id).innerHTML = change,
  swap: (oldId, newId) => {
    div.hide(oldId);
    div.show(newId);
  }
};

//display necessary information on the page when the game initializes. 
const initializeBoard = () => {
  div.show("game-board");  //displays the div that displays the following.
  div.change("display-guesses", wrongGuesses); //will show all wrong guesses
  div.change("display-lives", `${livesLeft}/6`); //will show lives left: '6/6', '5/6', '4/6'...
  div.change("display-board", wordBoard.join('')); //display the blank board array, joined() to remove commas. 
  div.change("image", `<img src="./assets/img/hm${livesLeft}.gif">`) //changes the hangman image based on lives left.
};

//when a user guesses a letter:
const guessLetter = guessedLetter => {
  div.change("message", ""); //clear all messages if the last guess threw an error for being a symbol, number, or redundant guess.
  div.reset("guess-input"); //clear the text box.

  let letter = guessedLetter.toLowerCase(); //convert guessed letter to a lower case letter
  let letterExistsInWord = word.indexOf(letter) > -1; // if true, the guessed letter exists in the word.
  let guessIsNotALetter = "abcdefghijklmnopqrstuvwxyz".indexOf(letter) === -1; //if true, the guess is not a letter. 
  let letterAlreadyGuessed = wrongGuesses.indexOf(letter) > -1 || wordBoard.indexOf(letter) > -1; //if true, the letter was previously guessed.

  if (letterAlreadyGuessed) div.change("message", "letter was already guessed."); // edge case: if the letter was already guessed...
  else if (guessIsNotALetter) div.change("message", "guess was not a letter.");  // edge case:l if the guess was not a letter...
  else if (letterExistsInWord)[...word].forEach((l, i) => letter === l ? (wordBoard[i] = l) : null); //if letter exists in word, add the letter to the word board.
  else { // otherwise decrement lives and push letter to the wrong guess array.
    livesLeft--;
    wrongGuesses.push(letter);
  };

  if (wordBoard.indexOf(" _ ") < 0) { //if there are no more blank spaces in the word, declare 'you won' and restart game. 
    div.change("message", `You won! Game will reset in five seconds`);
    setTimeout(() => location.reload(), 5000);
  };

  if (livesLeft < 1) { //if there are no more lives left, declare 'you lose' and restart game. 
    div.hide("guess-input");
    div.hide("submit-guess");
    div.change("message", `You lose! The word was "${word}." Game will reset in five seconds.`);
    setTimeout(() => location.reload(), 5000);
  };

  initializeBoard(); //every time the 'guessedLetter' function runs, it runs all of the if statements above, which will change the values of at least one global variable. To display changes to the board, 'initializeBoard()' is run after every guess.
};

const generateWord = humanOrComputer => { // at the begining of the game you choose 'human' or 'computer'
  if (humanOrComputer === "human") { //if 'human' is selected, the game will prompt you to type in your own word.
    word = div.id("form-input").value.toLowerCase();
    if (word.length > 0) div.hide("enter-word");
    else { //edge case: if the user hits 'submit' without entering a word. 
      div.id('enter-word-message').style = "color: red;";
      return;
    }
  };

  if (humanOrComputer === "computer") { //if the user hits'computer' a word will be selected at random from the following array.
    let wordArray = ["calculator", "disasterous", "evaporate", "troubled", "grandmother", "approval", "unarmed",
      "console", "broadcast", "temporary", "breakfast", "workable", "opposite", "talk", "acceptable", "ladybug",
      "title", "price", "galvanize", "trinity", "Zuckerberg", "railway", "commons", "impel", "dogma", "boundless"
    ];

    word = wordArray[Math.floor(Math.random() * Math.floor(wordArray.length - 1))].toLowerCase();
    div.hide("human-or-computer");
  };

  wordBoard = Array(word.length).fill(" _ "); //this wil create the board once either 'human' or 'computer' is selected.
  initializeBoard(); //reusing initialize board so I dont have redunant code in the program. 
};


//event handlers...
div.id("lets-play").onclick = () => div.swap("lets-play", "human-or-computer"); //step #1 - press start
div.id("submit-word").onclick = () => generateWord("human"); //step #2 - select human
div.id("human").onclick = () => div.swap("human-or-computer", "enter-word"); //step #2.5 - enter word
div.id("computer").onclick = () => generateWord("computer"); //alternate step #2 - select computer 
div.id("submit-guess").onclick = () => guessLetter(div.id("guess-input").value); //step #3 - guess word