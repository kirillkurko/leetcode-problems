/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    let n = arr.length;
    
    for (let i = 0; i < arr.length; ++i) {
        let total = i * (n - i) + (n - i);
        sum += Math.ceil(total / 2) * arr[i];
    }
    
    return sum;
};