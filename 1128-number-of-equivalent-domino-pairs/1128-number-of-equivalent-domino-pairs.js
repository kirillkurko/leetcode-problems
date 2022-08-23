/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const swapToSort = (arr) => {
    if (arr[0] > arr[1]) {
        return [arr[1], arr[0]];
    }
    
    return arr;
}

const getNumOfPairs = (count) => {
    if (count < 2) {
        return 0;
    }
    
    let res = 1;
    
    for (let i = 3; i <= count; ++i) {
        res += i - 1;
    }
    
    return res;
}

var numEquivDominoPairs = function(dominoes) {
    const map = new Map();
    
    for (const domino of dominoes) {
        const arr = swapToSort(domino);
        
        const key = arr[0].toString() + arr[1].toString();
        
        map.set(key, (map.get(key) ?? 0) + 1);
    }
    
    let res = 0;
    
    for (const value of map.values()) {
        res += getNumOfPairs(value);
    }
    
    return res;
};