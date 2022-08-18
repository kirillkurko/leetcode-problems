/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const map = new Map();
    
    for (const num of nums) {
        if (map.has(num)) {
            return num;
        } else {
            map.set(num, (map.get(num) ?? 0) + 1);
        }
    }
};