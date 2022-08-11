function findSpecialInteger(arr: number[]): number {
    let count = 0;
    
    for (let i = 0; i < arr.length; ++i) {
        count += 1;
        
        if (count > arr.length / 4) {
            return arr[i];
        }
        
        if (arr[i + 1] !== arr[i]) {
            count = 0;
        }
    }
};