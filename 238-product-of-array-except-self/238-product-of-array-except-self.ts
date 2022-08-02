function productExceptSelf(nums: number[]): number[] {
    const answer = [];
    const left = [];
    const right = [];
    
    let product = 1;
    
    for (let i = 0; i < nums.length; ++i) {
        left[i] = product;
        product *= nums[i];
    }
    
    product = 1;
    
    for (let i = nums.length - 1; i >= 0; --i) {
        right[i] = product;
        product *= nums[i];
    }
    
    for (let i = 0; i < nums.length; ++i) {
        answer[i] = left[i] * right[i];
    }
    
    return answer;
};
