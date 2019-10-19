function countVowels(str) {
    let vowels = "aeiou"
    let vCount = 0
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vCount++;
        }
        
    }
    return vCount
}

console.log("hello",countVowels("hello"));