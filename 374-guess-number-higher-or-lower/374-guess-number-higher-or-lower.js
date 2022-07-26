/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let min = 0;
    let max = n;
    
    for (let i = 0; i <= n; ++i) {
        let mid = Math.floor(min + (max - min) / 2);
        
        const res = guess(mid);
        
        if (res === 0) {
            return mid;
        } else if (res === -1) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
};
