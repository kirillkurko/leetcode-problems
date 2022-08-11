function findLucky(arr: number[]): number {
    const unique = [...new Set(arr)];
    
    const sorted = [...arr].sort((a, b) => b - a);
    
    for (const value of sorted) {
        if (arr.filter(item => item === value).length === value) {
            return value;
        }
    }
    
    return -1;
};