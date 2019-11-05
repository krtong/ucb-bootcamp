function pangramChecker(str) {
    if (str.length < 26) {
        return false;
    }
    let alphabet = 'qwertyuiopasdfghjklzxcvbnm'
    let newStr = str.toLowerCase();

    for (let i = 0; i < alphabet.length; i++) {
        if (newStr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    } return true;
}

console.log("first test", pangramChecker('asdf'))
console.log("second test", pangramChecker('Watch Jeopardy, AlexTrebek\'s fun TV quiz game'))
console.log("third test", pangramChecker('Five hexing wizard bots jumped quickly'
));
console.log("fourth test",pangramChecker('JavaScript is the best'));