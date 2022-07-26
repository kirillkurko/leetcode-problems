/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const tokens = s.split(' ');
        
    const numbers = tokens.map(token => Number.parseInt(token)).filter(Boolean);
    
    for (let i = 0; i < numbers.length - 1; ++i) {
        if (numbers[i] >= numbers[i + 1]) {
            return false;
        }
    }
        
    return true;
};