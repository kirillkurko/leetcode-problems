/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.indexOf(target) === -1) {
        return [-1, -1];
    }
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        if (nums[left] === target && nums[right] === target) {
            break;
        }
        if (nums[left] !== target) {
            left += 1;
        }
        if (nums[right] !== target) {
            right -= 1;
        }
    }
    
    return [left, right];
};