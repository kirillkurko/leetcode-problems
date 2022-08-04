function diagonalSort(mat: number[][]): number[][] {
    let t = 0;
    
    while (t < mat.length) {
        for (let i = 1; i < mat.length - t; ++i) {
            for (let j = 1; j < mat[i].length - t; ++j) {
                if (mat[i][j] < mat[i - 1][j - 1]) {
                    mat[i - 1][j - 1] = [mat[i][j], mat[i][j] = mat[i - 1][j - 1]][0];
                }
            }
        }
        
        t += 1;
    }
    
    return mat;
};