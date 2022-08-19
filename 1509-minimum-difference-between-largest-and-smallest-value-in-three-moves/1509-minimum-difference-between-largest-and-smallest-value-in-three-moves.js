/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    
    if (sorted.length < 4) {
        return 0;
    }
    
    const k = 3;
    let l = k;
    let r = sorted.length - 1;
    let res = Number.MAX_VALUE;
    
    while (l >= 0 && r >= 0) {
        res = Math.min(res, sorted[r] - sorted[l]);
        l -= 1;
        r -= 1;
    }
    
    return res;
};