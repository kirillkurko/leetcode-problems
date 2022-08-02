function checkValidity(a: number, b: number, c: number): boolean {
    return a + b > c;
}
 
function largestPerimeter(nums: number[]): number {
    const sorted = [...nums].sort((a, b) => a - b);
    
    let res = 0;
    
    for (let i = sorted.length - 3; i >= 0; --i) {
        res = sorted[i] + sorted[i + 1] + sorted[i + 2];
        
        if (checkValidity(sorted[i], sorted[i + 1], sorted[i + 2])) {
            return res;
        }
    }
    
    return 0;
};