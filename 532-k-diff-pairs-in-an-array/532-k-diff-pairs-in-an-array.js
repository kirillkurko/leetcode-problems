/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; ++i) {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }
    
    let res = 0;
    
    for (const key of map.keys()) {
        if (k === 0 && map.get(key) > 1) {
            res += 1;
        } else if (k !== 0 && map.has(key + k)) {
            res += 1;
        }
    }
    
    return res;
};