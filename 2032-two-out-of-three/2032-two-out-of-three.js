/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const unqiue1 = [...new Set(nums1)];
    const unqiue2 = [...new Set(nums2)];
    const unqiue3 = [...new Set(nums3)];
    
    const map = new Map();
    
    const arr = [...unqiue1, ...unqiue2, ...unqiue3];
    
    for (let i = 0; i < arr.length; ++i) {
        const value = map.get(arr[i]);
        
        if (!value) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], value + 1);
        }
    }
    
    const res = [];
    
    for (const [key, value] of map.entries()) {
        if (value > 1) {
            res.push(key);
        }
    }
    
    return res;
};