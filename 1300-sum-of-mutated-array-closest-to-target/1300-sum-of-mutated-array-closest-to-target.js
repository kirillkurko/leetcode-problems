/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    arr.sort((a, b) => a - b);
    
    let a = 0;

    for (let i in arr) {
        const x = (target - a) / (arr.length - i);

        if (x < arr[i]) {
            return Math.round(x - 0.1)
        }

        a += arr[i];
    }
	
    return arr[arr.length - 1];
};