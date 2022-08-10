function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);
    
    if (arr.length % 2 !== 0) {
        return arr[Math.floor(arr.length / 2)];
    } 
    
    return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
};