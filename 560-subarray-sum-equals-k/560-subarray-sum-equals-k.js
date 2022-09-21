/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let res = 0;
    let sum = 0;
    const prefixSum = {0: 1};
    
    for (const n of nums) {
        sum += n;
        const diff = sum - k;
        res += prefixSum[diff] ?? 0;
        prefixSum[sum] = ++prefixSum[sum] || 1;
    }
    
    return res;
};