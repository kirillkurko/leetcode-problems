/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const createMap = (str) => {
    const map = new Map();
    
    for (const char of str) {
        map.set(char, (map.get(char) ?? 0) + 1);
    }
    
    return map;
}

var canConstruct = function(ransomNote, magazine) {
    const ransomMap = createMap(ransomNote);
    const magazineMap = createMap(magazine);
    
    for (const [key, value] of ransomMap) {
        if (!magazineMap.has(key)) {
            return false;
        } else if (magazineMap.get(key) < value) {
            return false;
        }
    }
    
    return true;
};