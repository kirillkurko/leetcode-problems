function arithmeticTriplets(nums: number[], diff: number): number {
    let res = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            for (let k = j + 1; k < nums.length; ++k) {
                if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
                    res += 1;
                }
            }
        }
    }
    
    return res;
};