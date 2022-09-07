/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();

    while (n != 1 && !set.has(n)) {
        set.add(n);
        const arr = `${n}`.split('');
        n = arr.reduce((acc, cur) => acc + ((+cur) ** 2), 0);
    }

    return n === 1;
};