function minimumReplacement(nums: number[]): number {
    let res = 0;
    
    for (let i = nums.length - 2 ; i >= 0 ; --i){
        if (nums[i] > nums[i + 1]) { 
            const temp = Math.ceil(nums[i] / nums[i + 1]);
            res += temp - 1;
            nums[i] = Math.floor(nums[i] / temp);
        }
    }
    
    return res;
};