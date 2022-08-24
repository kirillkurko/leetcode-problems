/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = '';
    let counter = 0;
    
    while (true) {
        
        if (strs[0].length <= counter) {
            return result;
        }
        
        result = result + strs[0][counter];
        
        for(let i = 1; i<strs.length; i++) {
            if (strs[i].length <= counter || strs[i][counter] != result[counter]) {
                return result.substring(0, result.length -1);
            }
        }
        counter += 1;
    }
};