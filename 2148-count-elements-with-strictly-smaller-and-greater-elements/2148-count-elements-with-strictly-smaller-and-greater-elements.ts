function countElements(nums: number[]): number {
    let res = 0;
    
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > min && nums[i] < max) {
            res += 1;
        }
    }
    
    return res;
};