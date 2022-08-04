function removeDuplicates(nums: number[]): number { 
    let i = 0;
	let j = 1;
	let n = nums.length;
    
	while (j < n) {
		if (nums[i] === nums[j]) {
			nums.splice(j, 1);
			n -= 1;
		}
		else {
			i = j;
			j += 1;
		}
	}
    
    return n;
};