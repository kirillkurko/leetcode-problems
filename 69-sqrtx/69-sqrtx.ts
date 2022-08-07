function mySqrt(x: number): number {
    let res = 0;
    
    while (res * res <= x) {
        res += 1;
    }
    
    return res - 1;
};