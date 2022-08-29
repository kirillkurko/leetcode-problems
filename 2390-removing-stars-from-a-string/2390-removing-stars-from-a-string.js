/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];
    
    for (const char of s) {
        if (char === '*') {
            stack.pop();
            continue;
        } else {
            stack.push(char);
        }
    }
    
    return stack.reduce((acc, v) => acc + v, '');
};