/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const res = [];
    
    potions.sort((a, b) => a - b);
    
    for (const spell of spells) {
        let left = 0;
        let right = potions.length - 1;
        
        while (left < right) {
            const middle = (left + right) >> 1;
            
            if (potions[middle] * spell < success) {
                left = middle + 1;
            } else {
                right = middle;
            }
        }
		
        if (potions[left] * spell < success) {
            res.push(potions.length - left - 1);
        } else {
            res.push(potions.length - right);
        }
    }
    
    return res;
};