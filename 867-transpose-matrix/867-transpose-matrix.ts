function transpose(matrix: number[][]): number[][] {
    let res = [];
    
    for (let i = 0; i< matrix[0].length; ++i) {
        let column = [];

        for (let j = 0; j < matrix.length; ++j) {   
            column.push(matrix[j][i]);
        }
        
        res.push(column);
    }
    
    return res;
};