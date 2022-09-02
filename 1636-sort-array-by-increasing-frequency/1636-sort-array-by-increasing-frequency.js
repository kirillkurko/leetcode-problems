/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const map = new Map();
    
    for (const value of nums) {
        map.set(value, (map.get(value) ?? 0) + 1);
    }
    
    const res = [];
    
    const sorted = [...map.entries()].sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : b[0] - a[0]);

    for (let [key, value] of sorted) {
        while (value > 0) {
            res.push(key);
            value -= 1;
        }
    }
        
    return res;
};