/**
 * @param {number} n
 * @return {number[]}
 */

var beautifulArray = function(n) {
    let res = [1];
    
    while (res.length < n) {
        let temp = [];
        for (const x of res) {
            if (x * 2 - 1 <= n) {
                temp.push(x * 2 - 1);
            }
        }
        for (const x of res) {
            if (x * 2 <= n) {
                temp.push(x * 2);
            }
        }
        
        res = temp;
    }
    
    return res;
};