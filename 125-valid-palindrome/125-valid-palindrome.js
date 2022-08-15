/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const prepared = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    
    
    return prepared === prepared.split('').reverse().join('');
};