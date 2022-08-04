function sortArrayByParityII(nums: number[]): number[] {
    const even = [];
    const odd = [];
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }
    
    const res = [];
    
    for (let i = 0; i < nums.length / 2; ++i) {
        res.push(even[i]);
        res.push(odd[i]);
    }
    
    return res;
};