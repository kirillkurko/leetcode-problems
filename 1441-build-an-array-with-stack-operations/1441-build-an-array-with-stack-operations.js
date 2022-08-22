/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const res = [];
    
    let value = target[target.length - 1];
    
    while (value > 0) {
        if (target.includes(value)) {
            res.push("Push");
        } else {
            res.push('Pop');  
            res.push("Push");
        }
        value -= 1;
    }
    
    return res.reverse();
};