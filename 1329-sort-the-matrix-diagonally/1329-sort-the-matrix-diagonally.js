/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    let row = mat.length - 1;
    let col = 0;
    
    while (row > 0 || col < mat[0].length) {
        let arr = [];
        let r = row;
        let c = col;
        
        while (r < mat.length && c < mat[0].length) {
            arr.push(mat[r][c]);
            if (r < mat.length) {
                r += 1;
            }
            if (c < mat[0].length) {
                c += 1;
            }
        }
        
        arr.sort((a, b) => a - b);
        
        r = row;
        c = col;
        for (let q of arr) {
            mat[r++][c++] = q;
        }
        if (row === 0) {
            col += 1;
        } else {
            row -= 1;
        }
    }
    
    return mat;
};