/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) {
        return 0;
    } 
    
    const sorted = [...nums].sort((a, b) => a - b);
    
    let res = 0;
    
    for (let i = 0; i < sorted.length - 1; ++i) {
        res = Math.max(res, sorted[i + 1] - sorted[i]);
    }
    
    return res;
};