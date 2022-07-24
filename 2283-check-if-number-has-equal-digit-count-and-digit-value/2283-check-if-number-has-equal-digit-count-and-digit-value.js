/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    for (let i = 0; i < num.length; ++i) {
        const count = num.split('').filter(s => +s == i).length;
        
        if (count !== +num[i]) {
            return false;
        }
    }
    
    return true;
};