function minPairSum(nums: number[]): number {
    const sorted = [...nums].sort((a, b) => a - b);
    
    let res = sorted[0] + sorted[sorted.length - 1];
    
    for (let i = 1; i < sorted.length / 2; ++i) {
        const temp = sorted[i] + sorted[sorted.length - i - 1];
        
        res = Math.max(res, temp);
    }
    
    return res;
};