/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = [];
    let length = 0;
    
    while(s.length) {
        const char = s.charAt(0);
        s = s.slice(1);
        
        if (res.includes(char)) {
            length = Math.max(length, res.length);
            res = res.slice(res.indexOf(char) + 1);
            res.push(char);
		} else {
            res.push(char);
        }
    }
    
    return Math.max(length, res.length);
};