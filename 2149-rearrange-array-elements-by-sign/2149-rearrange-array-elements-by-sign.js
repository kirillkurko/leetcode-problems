/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const positive = [];
    const negative = [];
    
    for (const num of nums) {
        if (num > 0) {
            positive.push(num);
        } else {
            negative.push(num);
        }
    }
    
    for (let i = 0; i < nums.length; ++i) {
        if (i % 2 === 0) {
            nums[i] = positive[Math.floor(i / 2)];
        } else {
            nums[i] = negative[Math.floor(i / 2)];
        }
    }
    
    return nums;
};