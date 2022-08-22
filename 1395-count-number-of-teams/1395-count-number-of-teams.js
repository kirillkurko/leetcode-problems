/**
 * @param {number[]} rating
 * @return {number}
 */
const check = (a, b, c) => {
    return (a < b && b < c) || (a > b && b > c);
}

var numTeams = function(rating) {
    let res = 0;
    
    for (let i = 0; i < rating.length; ++i) {
        for (let j = i + 1; j < rating.length; ++j) {
            for (let k = j + 1; k < rating.length; ++k) {
                if (check(rating[i], rating[j], rating[k])) {
                    res += 1;
                }
            }
        }
    }
    
    return res;
};