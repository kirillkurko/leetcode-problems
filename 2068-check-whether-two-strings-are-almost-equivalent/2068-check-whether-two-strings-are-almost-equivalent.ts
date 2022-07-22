function checkAlmostEquivalent(word1: string, word2: string): boolean {
    const letters = new Array(26).fill(0);

    const aChar = "a".charCodeAt(0);
    
    for (let i = 0; i < word1.length; ++i) {
        letters[word1.charCodeAt(i) - aChar] += 1;
        letters[word2.charCodeAt(i) - aChar] -= 1;
    }
    
    console.log(letters[0]);
    
    console.log(aChar - word1[0].charCodeAt(0));
    
    for (let i = 0; i < 26; ++i) {
        if (letters[i] > 3 || letters[i] < -3) {
            return false;
        }
    }
    
    return true;
}