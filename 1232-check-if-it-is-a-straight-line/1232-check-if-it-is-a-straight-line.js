/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) {
        return true;
    }
    
    const x1 = coordinates[0][0];
    const y1 = coordinates[0][1];
    const x2 = coordinates[1][0];
    const y2 = coordinates[1][1];
    
    for (let i = 2; i < coordinates.length; ++i) {
        const x3 = coordinates[i][0];
        const y3 = coordinates[i][1];
        
        if ((x2 - x1) * (y3 - y1) !== (y2 - y1) * (x3 - x1)) {
            return false;
        }
    } 
    
    return true;
};