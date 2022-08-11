function getMaximumGenerated(n: number): number {  
    if (n < 2) {
        return n;
    }
    
    const arr = new Array(n + 1);
    
    arr[0] = 0;
    arr[1] = 1;
    
    let res = 0;
    
    for (let i = 2; i <= n; ++i) {
        const index = Math.floor(i / 2);
        
        if (i % 2 === 0) {
            arr[i] = arr[index];
        } else {
            arr[i] = arr[index] + arr[index + 1];
        }
        
        res = Math.max(arr[i], res);
    }
    
    return res;
};