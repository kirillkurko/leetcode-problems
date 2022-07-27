/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; ++i) {
        const value = map.get(nums[i]);
        
        if (!value) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], value + 1);
        }
    }
    
    let res = [0, 0];
    
    for (const [key, value] of map) {
        res[0] += Math.floor(value / 2);
        res[1] += value % 2;
    }
    
    return res;
};