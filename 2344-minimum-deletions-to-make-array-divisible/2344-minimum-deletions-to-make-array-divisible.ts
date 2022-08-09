function gcd(a: number, b: number) {
    if (a % b === 0) {
        return b;
    }
    
    return gcd(b, a % b);
}

function minOperations(nums: number[], numsDivide: number[]): number {
    let gc = numsDivide[0];
    
    for (let i = 0; i < numsDivide.length; ++i) {
        gc = gcd(gc, numsDivide[i]);
    }
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; ++i) {
        if (gc % nums[i] === 0) {
            return i;
        }
    }
    
    return -1;
};