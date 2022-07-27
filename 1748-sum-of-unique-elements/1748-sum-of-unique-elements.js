/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let res = 0;
    
    const map = new Map();
    
    for (let i = 0; i < nums.length; ++i) {
        const value = map.get(nums[i]);
        
        if (!value) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], value + 1);
        }
    }
    
    for (const [key, value] of map) {
        if (value === 1) {
            res += key;
        }
    }
    
    return res;
};