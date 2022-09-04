/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let res = 0;
    let step = 1;
    
    while (n > 0) {
        res += 1;
        n -= step;
        step += 1;
    }
    
    return n === 0 ? res : res - 1;
};