/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    let str = n.toString().split('').sort().join('');
  
    for (let i = 0, power = 1; i < 30; i++, power <<= 1) {
        let powerStr = power.toString().split('').sort().join('');
        
        if (str == powerStr) {
            return true; 
        }
    }
    
    return false;
};