/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let count = 1;
    
    for (let num of nums) {
        if (num === nums[i - 1]) {
            count += 1;
        } else {
            count = 1;
        }
        if (i === 0 || num >= nums[i - 1] && count <= 2) {
            nums[i++] = num;
        }
    }
    
    return i;
};