/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = new Array(nums1.length).fill(-1);

    for (let i = 0; i < nums1.length; ++i) {
        let rig;
        let jIndex = nums2.indexOf(nums1[i]) + 1;

        for (let j = jIndex; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                rig = nums2[j];
                break;
            } 
        }

        res[i] = rig ? rig : res[i];
        
      }
    
      return res;
};