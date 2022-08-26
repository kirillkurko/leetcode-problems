/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var isNegative = dividend < 0 ^ divisor < 0;
    var res = isNegative ? Math.ceil(dividend / divisor) : Math.floor(dividend / divisor);
    
    if (res > (2**31) - 1 || res < -(2**31)+1) {
        return isNegative ? -(2**31) : (2**31) - 1;
    }
    
    return res;
};