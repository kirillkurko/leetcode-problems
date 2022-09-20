/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let flag = true;
    for (let i = 0; i < nums.length - 1; ++i) {
        if (nums[i] > nums[i + 1]) {
            if ((!(nums[i] > nums[i + 2]) || !(nums[i - 1] > nums[i + 1])) && flag){
                flag = false;
            } else {
                return false;
            }
        }
    }
    
    return true;
};