/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let res = 0;
    
    for (let i = 1; i <= num; ++i) {
        if (i < 10) {
            if (i % 2 === 0) {
                res += 1;
            }
        } else {
            let sum = 0;
            let value = i;

            while (value !== 0) {
                sum += value % 10;
                value = Math.floor(value / 10);
            }
            
            console.log(sum);

            if (sum % 2 === 0) {
                res += 1;
            }
        }
    }
    
    return res;
};