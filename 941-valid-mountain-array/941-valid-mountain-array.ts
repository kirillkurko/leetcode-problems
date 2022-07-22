function validMountainArray(arr: number[]): boolean {
    let peak;
	for (let i = 0; i < arr.length; i++) {
		if (!peak && arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
			if (i !== 0 && i !== arr.length - 1) {
                peak = arr[i];
			    continue;
            }
		}
		if (!peak) {
			if (arr[i] <= arr[i - 1]) {
				return false;
			}
		}
		else {
			if (arr[i] >= arr[i - 1]) {
				return false;
			}
		}
	}
    
	if (!peak) {
		return false;
	}
    
	return true;
};