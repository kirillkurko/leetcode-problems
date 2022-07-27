/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const res = [];
    
    for (let i = 0; i < nums.length; ++i) {
        res.push(nums[nums[i]]);
    }
    
    return res;
};