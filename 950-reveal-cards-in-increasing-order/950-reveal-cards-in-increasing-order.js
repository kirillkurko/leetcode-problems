/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    const sorted = [...deck].sort((a, b) => a - b);
    
    const res = [];
    
    while (sorted.length) {
        if (res.length > 0) {
            res.unshift(res.pop());
        }
        
        res.unshift(sorted.pop());
    }
    
    return res;
};