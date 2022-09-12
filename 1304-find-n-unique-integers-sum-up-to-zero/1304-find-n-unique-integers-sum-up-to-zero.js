/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res = [];
    
    for (let i = 0 - Math.floor(n / 2) ; res.length < n; ++i) {
        if (i === 0 && n % 2 === 0) {
            continue;
        }
        res.push(i);
    }
    
    return res;
};