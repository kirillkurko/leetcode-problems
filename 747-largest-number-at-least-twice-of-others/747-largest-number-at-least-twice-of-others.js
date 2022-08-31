/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const sorted = [...nums].sort((a, b) => b - a);
    
    return sorted[0] >= sorted[1] * 2 ? nums.indexOf(sorted[0]) : -1;
};