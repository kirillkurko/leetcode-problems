/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    let count = 0;
    let n = 0;
    
    while (count < k) {
        count += 1;
        n = n * 10 + 1;            
        n = n % k;                  
        if (n === 0) {
            return count;
        }
    }
    
    return -1;
};