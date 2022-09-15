/**
 * @param {string} s
 * @return {boolean}
 */
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

var halvesAreAlike = function(s) {
    const first = s.slice(0, s.length / 2);
    const second = s.slice(s.length / 2, s.length);
    
    let count = 0;
    
    for (const char of first) {
        if (vowels.includes(char)) {
            count += 1;
        }
    }
    
    for (const char of second) {
        if (vowels.includes(char)) {
            count -= 1;
        }
    }
    
    return count === 0;
};