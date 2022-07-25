function maxProduct(nums: number[]): number {
    const sorted = [...nums].sort((a, b) => b - a);
    
    return (sorted[0] - 1) * (sorted[1] - 1);
};