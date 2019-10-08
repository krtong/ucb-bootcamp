

    //helper functions
    let [word, livesLeft, wrongGuesses] = ['', 6, []];
    let wordBoard = [];

    const div = {
        id : (id) => document.getElementById(id),
        show: (id) => document.getElementById(id).style = `display: show`,
        hide: (id) => document.getElementById(id).style = `display: none;`,
        change: (id, change) => document.getElementById(id).innerHTML = change,
        swap: (oldId, newId) => {
            div.hide(oldId);
            div.show(newId);
        }
    }

    const initializeBoard = input => {
        div.show("game-board")
        div.change("display-lives", livesLeft);
        div.change("display-guesses", wrongGuesses);
        div.change("display-board", wordBoard);
    }

    const guessLetter = guessedLetter => {
        let letter = guessedLetter[0].toLowerCase();
        let letterExistsInWord = word.indexOf(letter) > 0;
        if (letterExistsInWord) {
            [...word].forEach((l, i) => letter === l ? wordBoard[i] = l : null);
        } else {
            livesLeft--;
            wrongGuesses.push(letter);
        }
        if (wordBoard.indexOf(' _ ') < 0)  div.show('you-won');
        else if (livesLeft < 1) div.show('you-lose');
        initializeBoard();
    }

    //initialize game
    div.id('lets-play').onclick = e => div.swap('lets-play', 'human-or-computer');

    //choose your opponent:
    //choose human:
    div.id('human').onclick = e => div.swap('human-or-computer', 'enter-word');
   
    div.id('submit-word').onclick = e => {
        word = (div.id('form-input').value).toLowerCase();
        wordBoard = Array(word.length).fill(' _ ') ;
        div.hide('enter-word');
        initializeBoard();
    };

    // chose computer: a word will be randomly selected.
    div.id('computer').onclick = e => {

        let wordArray = ['calculator', 'disasterous', 'evaporate', 'troubled', 'grandmother', 'approval', 'unarmed', 'console', 'broadcast', 'temporary', 'breakfast', 'workable', 'opposite', 'talk', 'acceptable', 'ladybug', 'title', 'price', 'galvanize', 'trinity', 'Zuckerberg', 'railway', 'commons', 'impel', 'dogma', 'boundless', 'tactile']
        word = (wordArray[Math.floor(Math.random() * Math.floor(wordArray.length - 1))].toLowerCase())
        div.hide('human-or-computer');
        wordBoard = Array(word.length).fill(' _ ') ;
        initializeBoard();
    };
   
    div.id("submit-guess").onclick = e => {
        let guess = div.id("guess-input").value;
        guessLetter(guess);
    };

