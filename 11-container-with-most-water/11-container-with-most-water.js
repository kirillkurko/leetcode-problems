/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0
    
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const current = Math.min(height[left], height[right]) * (right - left);
        
        res = Math.max(res, current);
        
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    
    return res;
}