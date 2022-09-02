/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    const [cold, warm, hot] = amount.sort((a, b) => b - a);
  
    if (hot === 0) {
        return Math.max(...amount);
    }

    return 1 + fillCups([cold - 1, warm - 1, hot]);
};