function pancakeSort(arr: number[]): number[] {
    let res = [];
    
    for (let i = arr.length; i > 0; --i) {
        let index = arr.indexOf(i);
        
        if (index !== i - 1) {
            let pancake = arr.slice(0, index + 1).reverse(); 
            res.push(index + 1);
            arr = arr.slice(index + 1);
            arr = pancake.concat(arr);
            pancake = arr.slice(0, i).reverse();
            res.push(i);
            arr = arr.slice(i);
            arr = pancake.concat(arr);
        }
    }
    
    return res;
};
