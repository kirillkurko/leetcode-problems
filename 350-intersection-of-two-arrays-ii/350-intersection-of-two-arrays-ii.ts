function intersect(nums1: number[], nums2: number[]): number[] {
    const map1 = new Map;
    const map2 = new Map();
    
    for (let num of nums1) {
        map1.set(num, (map1.get(num) || 0) + 1);
    }
    
    for (let num of nums2) {
        map2.set(num, (map2.get(num) || 0) + 1);
    }
    
    let res = [];
    
    for (const [key, value] of map1) {
        if (map2.has(key)) {
            let value2 = map2.get(key);
            let min = Math.min(value, value2);
            let temp = new Array(min).fill(key);
            res = res.concat(temp);
        }
    }
    
    return res;
};