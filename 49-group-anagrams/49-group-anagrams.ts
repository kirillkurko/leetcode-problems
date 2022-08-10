function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();
    
    for (const word of strs) {
        const sortedWord = word.split('').sort().join('');
        
        if (map.has(sortedWord)) {
            map.set(sortedWord, [...map.get(sortedWord), word]);
        } else {
            map.set(sortedWord, [word]);
        }
    }
    
    let res = [];
    
    for (const value of map.values()) {
        res = [...res, value];
    }
    
    return res;
};