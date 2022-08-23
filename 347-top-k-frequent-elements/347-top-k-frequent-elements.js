/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    
    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }
    
    const arr = [...map.entries()];
    
    arr.sort((a, b) => b[1] - a[1]);
    
    return arr.slice(0, k).map(a => a[0]);
};