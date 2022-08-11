function isCovered(ranges: number[][], left: number, right: number): boolean {
    for (let i = left; i <= right; ++i) {
        const find = ranges.find(r => i >= r[0] && i <= r[1]);
        
        if (!find) {
            return false;
        }
    }
    
    return true;
};