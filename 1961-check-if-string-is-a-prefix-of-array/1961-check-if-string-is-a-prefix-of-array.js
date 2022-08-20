/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let current = ''
    
    for (const word of words) {
        current += word;
        
        if (s === current) {
            return true;
        }
    }
    
    return false;
};