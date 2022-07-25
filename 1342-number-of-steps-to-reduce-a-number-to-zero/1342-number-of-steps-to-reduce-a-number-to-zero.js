/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let res = 0;
    let value = num;
    
    while (value !== 0) {
        if (value % 2 === 0) {
            value = Math.floor(value / 2);
        } else {
            value -= 1;
        }
        res += 1;
    }
    
    return res;
};