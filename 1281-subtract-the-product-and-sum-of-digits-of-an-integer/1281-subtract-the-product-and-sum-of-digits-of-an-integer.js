/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const product = n.toString().split('').reduce((acc, v) => acc * v, 1); 
    const sum = n.toString().split('').reduce((acc, v) => acc + +v, 0);
    return product - sum;
};