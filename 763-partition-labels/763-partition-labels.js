/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const last = new Map();
    
      for (let i = 0; i < s.length; ++i) {
        last.set(s[i], i);
      }
  
      let res = [];
      let max = 0;
      let prev = -1;

      for (let i = 0; i < s.length; i++) {
        max = Math.max(max, last.get(s[i]));
                       
        if (max === i) {
          res.push(max - prev);
          prev = max;
        }
      }

      return res;
};