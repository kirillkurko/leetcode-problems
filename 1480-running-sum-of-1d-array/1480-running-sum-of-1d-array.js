/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res = [...nums];
    
    for (let i = 1; i < res.length; ++i) {
        res[i] += res[i - 1];
    }
    
    return res;
};