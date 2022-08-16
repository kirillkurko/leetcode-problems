/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const map = new Map();
    
    for (let i = 0; i < s.length; ++i) {
        map.set(s[i], (map.get(s[i]) ?? 0) + 1);
    }
    
    return new Set(map.values()).size === 1;
};