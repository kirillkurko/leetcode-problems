/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            if ((j === i || j === grid[i].length - i - 1)) {
                if (grid[i][j] === 0) {
                    return false;
                }
            } else if (grid[i][j] !== 0) {
                return false;
            }
        }
    }
    
    return true;
};