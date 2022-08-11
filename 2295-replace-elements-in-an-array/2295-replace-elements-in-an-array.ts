function arrayChange(nums: number[], operations: number[][]): number[] {
    for (let i = 0; i < operations.length; ++i) {
        nums[nums.indexOf(operations[i][0])] = operations[i][1];
    }
    
    return nums;
};