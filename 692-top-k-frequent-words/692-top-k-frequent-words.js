/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = new Map();
    
    for (const word of words) {
        map.set(word, (map.get(word) ?? 0) + 1);
    }
    
    const arr = [];
    
    for (const [key, value] of map) {
        arr.push([key, value]);
    }
    
    arr.sort((a, b) => b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0]));
    
    return arr.slice(0, k).map(item => item[0]);
};