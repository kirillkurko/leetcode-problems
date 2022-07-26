function reverse(x: number): number {
    const sign = x < 0;
    let reverseN = 0;
    let n = Math.abs(x);
    
    while (n) {
        reverseN = reverseN * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    
    return reverseN > 0x7FFFFFFF ? 0 : sign ? -reverseN : reverseN;
};