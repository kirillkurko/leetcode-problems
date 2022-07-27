/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let sum = nums[0];
    let res = sum;
    
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] > nums[i - 1]) {
            sum += nums[i];
            res = Math.max(res, sum);
        } else {
            sum = nums[i];
        }
    }
    
    return res;
};