
    //helper functions
    let word =  {
        
    };
    const div = {
        id : (id) => document.getElementById(id),
        show: (id) => document.getElementById(id).style = `display: show;`,
        hide: (id) => document.getElementById(id).style = `display: none;`,
        change: (id, change) => document.getElementById(id).innerHTML = change,
        swap: (oldId, newId) => {
            div.hide(oldId);
            div.show(newId);
        }
    }

    //start
    div.id('lets-play').onclick = e => div.swap('lets-play', 'human-or-computer');

    //choose your opponent:
    //choose human:
    div.id('human').onclick = e => div.swap('human-or-computer', 'enter-word');
    //enter your own word.
    div.id('submit-word').onclick = e => {console.log(e)};

    // chose computer: a word will be randomly selected.
    div.id('computer').onclick = e => {
        let wordArray = ['calculator', 'disasterous', 'evaporate', 'troubled', 'grandmother', 'approval', 'unarmed', 'console', 'broadcast', 'temporary', 'breakfast', 'workable', 'opposite', 'talk', 'acceptable', 'ladybug', 'title', 'price', 'galvanize', 'trinity', 'Zuckerberg', 'railway', 'commons', 'impel', 'dogma', 'boundless', 'tactile']
        word = wordArray[Math.floor(Math.random() * Math.floor(words.length - 1))].toLowerCase()
    };

    // display game board and lsiten for key presses
    const displayLetterSpaces = input => {
        div.show('game-board', true);
    }

