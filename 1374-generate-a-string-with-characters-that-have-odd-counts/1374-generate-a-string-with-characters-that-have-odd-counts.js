/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let res = '';

    if (n % 2 !== 0) {
        for (i = 0; i < n; ++i) { 
            res += 'a' 
        }
    } else {
        for (let i = 0; i < n - 1; ++i) { 
            res += 'a'
        }
        
        res += 'b';
    }
    
    return res;
};