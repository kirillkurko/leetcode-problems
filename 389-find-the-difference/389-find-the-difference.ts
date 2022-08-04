function findTheDifference(s: string, t: string): string {
    const hash = {};
    [...s].forEach(char => {
        hash[char] = hash[char] ? hash[char] + 1 : 1;
    })
    
    const addedChar = [...t].find(char => {
        if(hash[char]) {
            hash[char]--;
            return false;
        }
        return true;
    })
    
    return addedChar;
};