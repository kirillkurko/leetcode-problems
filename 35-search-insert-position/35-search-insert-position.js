/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const n = nums.length
    
    for (let i = 0; i < nums.length; ++i) {
        const r = target - nums[i];
        if (r === 0 || r < 0) {
            return i;
        }
    }
    
    return n;
};