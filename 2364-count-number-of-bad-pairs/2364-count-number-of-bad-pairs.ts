function countBadPairs(nums: number[]): number {
    let res = 0;
    const map = new Map();
    
    for (let i = 0; i < nums.length; ++i) {
        const current = map.get(nums[i] - i) ? map.get(nums[i] - i) : 0;
        res += i - current;
        map.set(nums[i] - i, current + 1);
    }
    
    return res;
};
