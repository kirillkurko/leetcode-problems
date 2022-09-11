/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    
    for (const account of accounts) {
        max = Math.max(max, account.reduce((acc, v) => acc + v, 0));
    }
    
    return max;
};