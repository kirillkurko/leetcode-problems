function arrayRankTransform(arr: number[]): number[] {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    const map = new Map();
    
    for (let i = 0; i < sorted.length; ++i) {
        if (!map.has(sorted[i])) {
            map.set(sorted[i], i + 1);
        }
    }
    
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = map.get(arr[i]);
    }
    
    return arr;
};