/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let res = 0;
    
    for (let i = 0; i < mat.length; ++i) {
            res += mat[i][i];
            res += mat[i][mat.length - 1 - i];
    }
    
    if (mat.length % 2 !== 0) {
        res -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
    }
    
    return res;
};