/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const first = nums1.slice(0, m);
    const second = nums2.slice(0, n);
    
    const sorted = [...first, ...second].sort((a, b) => a - b);
    
    for (let i = 0; i < nums1.length; ++i) {
        nums1[i] = sorted[i];
    }
    
    return nums1;
};