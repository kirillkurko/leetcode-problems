/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const ans = [];
    const stack = [];
    
    for (let i = nums.length * 2 - 1; i >= 0; --i) {
        while (stack.length && nums[stack[stack.length - 1]] <= nums[i % nums.length]) {
            stack.pop();
        }
        ans[i % nums.length] = stack.length ? nums[stack[stack.length - 1]] : -1;
        stack.push(i % nums.length);
    }
    
    return ans;
};