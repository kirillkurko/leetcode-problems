/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const sorted = [...salary].sort((a, b) => a - b);
    
    let sum = 0;
    for (let i = 1; i < sorted.length - 1; ++i) {
        sum += sorted[i];
    }
    
    return sum / (sorted.length - 2);
};