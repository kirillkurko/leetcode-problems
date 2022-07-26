/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
        let pre = 0;
        let sum = nums.reduce((acc, v) => acc + v, 0);
        const res = [];
    
        for (let i = 0; i < nums.length; ++i) {
            const value = (i * (nums[i]) - pre) + ((sum - pre) - (nums.length - i) * nums[i])
            res.push(value);
            pre += nums[i];
        }
        
    return res;
};