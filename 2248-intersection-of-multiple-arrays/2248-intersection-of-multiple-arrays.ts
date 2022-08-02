function intersection(nums: number[][]): number[] {
    const arr = nums.flat();
    const map = new Map();
    
    for (let i = 0; i < arr.length; ++i) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    
    return [...map.entries()].filter(([, value]) => value === nums.length).map(([key]) => key).sort((a, b) => a - b);
};