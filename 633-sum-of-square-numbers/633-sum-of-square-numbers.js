/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let first = 0;
    let second = Number.parseInt(Math.sqrt(c));
    
    while (first <= second) {
        const temp = first * first + second * second;
        
        if (temp === c) {
            return true;
        } 
        
        if (temp < c) {
            first += 1;
        } else {
            second -= 1;
        }
    
    }
    
    return false;
};