function climbStairs(n: number): number {
    if (n <= 3) {
        return n;
    }
    
    let first = 0;
    let second = 1;
    let temp = first + second;
    
    for (let i = 0; i < n; ++i) {
        temp = first + second;
        first = second;
        second = temp;
    }
    
    return temp;
};