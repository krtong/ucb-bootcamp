const isAnagram = (word1, word2) => (word1.split("").sort().join("") === word2.split("").sort().join(""));

console.log('stop, pots', isAnagram("stop", "pots"))