/**
 * @param {number} num
 * @return {string}
 */
const romanObj = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I",
    }

var intToRoman = function(num) {
    const intArr = Object.keys(romanObj).reverse();
    let number = num;
    let intToRoman = [];
    
    for(let i = 0; i < intArr.length; ++i) {
        if (number >= intArr[i]) {
            const count = Math.floor(number / intArr[i]) ?? 1;
            const newArr = Array(count).fill(romanObj[intArr[i]]);
            number = number - (intArr[i] * count)
            intToRoman = [...intToRoman, ...newArr];
        }
    }
    
    return intToRoman.join('')
};