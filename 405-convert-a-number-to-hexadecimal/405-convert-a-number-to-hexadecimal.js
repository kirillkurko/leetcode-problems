/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    return num >= 0 ? num.toString(16) : (num += Math.pow(2, 32)).toString(16);
};