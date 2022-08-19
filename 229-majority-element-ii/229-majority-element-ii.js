/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = new Map();
    
    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }
    
    const res = [];
    
    for (const [key, value] of map) {
        if (value > nums.length / 3) {
            res.push(key);
        } 
    }
    
    return res;
};