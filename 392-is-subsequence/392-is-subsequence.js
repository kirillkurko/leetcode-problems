/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) {
        return false;
    }
    let j = 0;
    
    for (i = 0; i< t.length; ++i) {
        if (s[j] === t[i]){
            j += 1;
        }
    }
    
    if (j == s.length) {
        return true;
    }

    return false;
};