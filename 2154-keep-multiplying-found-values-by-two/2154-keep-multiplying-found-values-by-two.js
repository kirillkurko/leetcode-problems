/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let res = original;
    const sorted = [...nums].sort((a, b) => a - b);
    
    for (let i = 0; i < sorted.length; ++i) {
        if (sorted[i] > res) {
            break;
        }
        
        if (sorted[i] === res) {
            res *= 2;
        }
    }
    
    return res;
};