/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    return [...new Set(word.split(/[a-zA-Z]/).filter(Boolean).map(i => BigInt(i)))].length;
};