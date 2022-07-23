/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const res = new Array(nums.length).fill(0);
    
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < nums.length; ++j) {
            if (i == j) {
                continue;
            }
            
            if (nums[j] < nums[i]) {
                res[i] += 1;
            }
        }
    }
    
    return res;
};