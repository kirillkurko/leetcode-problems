function checkIfExist(arr: number[]): boolean {
    for (let i = 0; i < arr.length; ++i) {
        const index = arr.indexOf(arr[i] * 2);
        if (index !== -1 && index !== i) {
            return true;
        }
    }
    
    return false;
};