/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const commonLength = Math.min(word1.length, word2.length);
    
    let first = word1, second = word2, rest = '';
    
    if (word1.length > commonLength) {
        first = word1.slice(0, commonLength);
        rest = word1.slice(commonLength);
        second = word2;
    } else if (word2.length > commonLength) {
        first = word1;
        rest = word2.slice(commonLength);
        second = word2.slice(0, commonLength);
    }
    
    let res = '';
    
    const length = word1.length === word2.length ? word1.length : commonLength;
    
    console.log(length);
    
    for (let i = 0; i < length; ++i) {
        res += first[i];
        res += second[i];
    }
    
    res += rest;
    
    return res;
};