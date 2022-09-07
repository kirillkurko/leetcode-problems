/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let i = 0, j = 0;
    let currTotal = 0;
    
    for (j = 0; j < k; j++) {
        currTotal += nums[j];
    }
    
    let max = currTotal / k
    
    while (j < nums.length) {
        const adding = nums[j];
        const removing = nums[i];
        
        currTotal += adding;
        currTotal -= removing;
        
        i++;
        j++;
        
        max = Math.max(max, currTotal / k);
    }
    
    return max;
};