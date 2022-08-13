/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map();
    
    for (let i = 0; i < s.length; ++i) {
        map.set(s[i], (map.get(s[i]) ?? 0) + 1);
                
    }
    
    let res = 0;
    let flag = false;
    
    for (const value of map.values()) {
        if (value % 2 !== 0) {
            flag = true;
            
            if (value > 2) {
                res += value - 1;
            }
        
        } else {
            res += value;
        }
    }
    
    return res + flag;
};

