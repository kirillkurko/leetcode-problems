/**
 * @param {string} s
 * @return {boolean}
 */

const OPEN = ['(', '{', '['];
const CLOSE = [')', '}', ']'];

var isValid = function(s) {
    const stack = [];
    
    for (const char of s) {
        if (stack.length === 0) {
            if (CLOSE.includes(char)) {
                return false;
            } else {
                stack.push(char);
            }
        } else {
            if (OPEN.includes(char)) {
                stack.push(char)
            } else {
                const item = stack.pop();
                
                if (item === '(' && char === ')') {
                    continue;
                }
                if (item === '{' && char === '}') {
                    continue;
                }
                if (item === '[' && char === ']') {
                    continue;
                }
                
                return false;
            }
        }
    }
    
    return stack.length === 0;
};