/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const getWordsByCount = (words, count) => {
    const map = new Map();
    
    for (const word of words) {
        map.set(word, (map.get(word) ?? 0) + 1);
    }
    
    const res = [];
    
    console.log(map);
    
    for (const [key, value] of map) {
        if (value === count) {
            res.push(key);
        }
    }
    
    return res;
}

var countWords = function(words1, words2) {
    const map1 = new Map();
    
    const unique1 = getWordsByCount(words1, 1);
    const unique2 = getWordsByCount(words2, 1);
    
    return getWordsByCount([...unique1, ...unique2], 2).length;
};