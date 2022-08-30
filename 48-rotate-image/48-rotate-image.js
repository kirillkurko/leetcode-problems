/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function transposeMatrix(matrix) {
    const n = matrix.length;
    
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            const temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
    
    return matrix;
}

function rotateMatrix(matrix) {
    const n = matrix.length;
    
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n / 2; ++j) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }
    
    return matrix;
}

var rotate = function(matrix) {
    return rotateMatrix(transposeMatrix(matrix));
};