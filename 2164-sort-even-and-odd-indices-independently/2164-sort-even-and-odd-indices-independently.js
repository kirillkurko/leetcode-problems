/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    const sortedArr = [];
    let sortedEvenNums = [];
    let sortedOddNums = [];
    
    for (let i = 0; i < nums.length; ++i) {
        if (i % 2 === 0) {
            sortedEvenNums.push(nums[i]);
        } else {
            sortedOddNums.push(nums[i]);
        }
    }
    
    sortedEvenNums = sortedEvenNums.sort((a, b) => b - a);
    sortedOddNums = sortedOddNums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; ++i) {
        if (i % 2 === 0) {
            sortedArr[i] = sortedEvenNums.pop();
        } else {
            sortedArr[i] = sortedOddNums.pop();
        }
    }
    
    return sortedArr;
};