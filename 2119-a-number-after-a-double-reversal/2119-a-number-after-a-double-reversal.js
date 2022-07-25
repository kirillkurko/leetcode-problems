/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    const reversed1 = Number.parseInt(num.toString().split('').reverse().join(''));
    const reversed2 = Number.parseInt(reversed1.toString().split('').reverse().join(''));
    
    return num === reversed2;
};