function thirdMax(nums: number[]): number {
    const unique = [...new Set(nums)];
    
    const sorted = [...unique].sort((a, b) => a - b);
    
    if (sorted.length < 3) {
        return sorted[sorted.length - 1];
    }
    
    return sorted[sorted.length - 3];
};