/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const unique = new Set();
    
    for (let i = 0; i < words.length; ++i) {
        for (let j = 0; j < words.length; ++j) {
            if (i == j) {
                continue;
            }
            if (words[j].includes(words[i])) {
                unique.add(words[i]);
            }
        }
    }
    
    return Array.from(unique);
};