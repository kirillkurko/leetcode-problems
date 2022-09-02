/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0;
	let map = new Map();
    
	for (let i = 0;i < nums.length; ++i) {
		if (map.get(k - nums[i])) {
		    if (map.get(k - nums[i] === 1)) {
                map.delete(k - nums[i]);
            } else {
                map.set(k - nums[i], (map.get(k - nums[i]) - 1));
            }
		 count += 1;
		} else {
		    map.set(nums[i], (map.get(nums[i]) + 1 || 1));
        }
	}
    
	return count;
};