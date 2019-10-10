//helper functions
let [word, livesLeft, wrongGuesses] = ["", 6, []];
let wordBoard = [];

const div = {
    id: id => document.getElementById(id),
    show: id => document.getElementById(id).style = `display: center; margin: 50px;`,
    hide: id => document.getElementById(id).style = `display: none;`,
    reset: id =>  document.getElementById(id).value = "",
    change: (id, change) => document.getElementById(id).innerHTML = change,
    swap: (oldId, newId) => {
        div.hide(oldId);
        div.show(newId);
    }
};

const initializeBoard = () => {
    div.show("game-board");
    div.change("image", `<img src="./assets/img/hm${livesLeft}.gif">`)
    div.change("display-lives", `${livesLeft}/6`);
    div.change("display-guesses", wrongGuesses);
    div.change("display-board", wordBoard.join(''));
};

const guessLetter = guessedLetter => {
    div.change("message", "");
    div.reset("guess-input");

    let letter = guessedLetter.toLowerCase();
    let guessIsNotALetter = "abcdefghijklmnopqrstuvwxyz".indexOf(letter) === -1;
    let letterExistsInWord = word.indexOf(letter) > -1;
    let letterAlreadyGuessed = wrongGuesses.indexOf(letter) > -1 || wordBoard.indexOf(letter) > -1;

    if (letterAlreadyGuessed) div.change("message", "letter was already guessed.");
    else if (guessIsNotALetter) div.change("message", "guess was not a letter.");
    else if (letterExistsInWord) [...word].forEach((l, i) => letter === l ? (wordBoard[i] = l) : null);
    else {
        livesLeft--;
        wrongGuesses.push(letter);
    };

    if (wordBoard.indexOf(" _ ") < 0) {
        div.change("message", `You won! Game will reset in five seconds`);
        setTimeout(() => location.reload(), 5000);
    };

    if (livesLeft < 1) {
        div.change("message", `You lose! The word was ${word}. Game will reset in five seconds.`);
        setTimeout(() => location.reload(), 5000);
    };

    initializeBoard();
};

const generateWord = humanOrComputer => {
    if (humanOrComputer === "human") {
        word = div.id("form-input").value.toLowerCase();
        div.hide("enter-word");
    };
    if (humanOrComputer === "computer") {
        let wordArray = [ "calculator","disasterous","evaporate","troubled","grandmother","approval","unarmed",
            "console","broadcast","temporary","breakfast","workable","opposite","talk","acceptable","ladybug",
            "title","price","galvanize","trinity","Zuckerberg","railway","commons","impel","dogma","boundless"];
            
        word = wordArray[Math.floor(Math.random() * Math.floor(wordArray.length - 1))].toLowerCase();
        div.hide("human-or-computer");
    };

    wordBoard = Array(word.length).fill(" _ ");
    initializeBoard();
};

div.id("lets-play").onclick = () => div.swap("lets-play", "human-or-computer");
div.id("human").onclick = () => div.swap("human-or-computer", "enter-word");
div.id("submit-word").onclick = () => generateWord("human");
div.id("computer").onclick = () => generateWord("computer");
div.id("submit-guess").onclick = () => guessLetter(div.id("guess-input").value);