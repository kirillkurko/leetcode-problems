function minOperations(nums: number[]): number {
    if (nums.length < 2) {
        return 0;
    }
    
    let res = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] >= nums[i + 1]) {
            res += nums[i] - nums[i + 1] + 1;
            nums[i + 1] += nums[i] - nums[i + 1] + 1;

        }
    }
    
    return res;
};