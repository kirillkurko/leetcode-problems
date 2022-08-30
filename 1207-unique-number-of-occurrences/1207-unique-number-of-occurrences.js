/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    
    for (const value of arr) {
        map.set(value, (map.get(value) ?? 0) + 1);
    }
    
    const values = [...map.values()];
    
    return [...new Set(values)].length === values.length;
};