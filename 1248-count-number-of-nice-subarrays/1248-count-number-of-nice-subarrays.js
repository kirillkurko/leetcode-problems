/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] % 2 !== 0) {
            nums[i] = 1;
        } else {
            nums[i] = 0;
        }
    }
    
    const map = new Map();
    map.set(0, 1);
    let res = 0;
    let sum = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        
        if (map.has(sum - k)) {
            res += map.get(sum - k);
        }
        
        map.set(sum, (map.get(sum) ?? 0) + 1);
    }
    
    return res;
};