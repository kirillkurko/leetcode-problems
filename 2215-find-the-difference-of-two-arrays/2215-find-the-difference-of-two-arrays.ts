function findDifference(nums1: number[], nums2: number[]): number[][] {
    const unique1 = [...new Set(nums1)];
    const unique2 = [...new Set(nums2)];
    
    const answer1 = unique1.filter(value => unique2.indexOf(value) === -1);
    const answer2 = unique2.filter(value => unique1.indexOf(value) === -1);
    
    return [answer1, answer2];
};