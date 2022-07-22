function validMountainArray(arr: number[]): boolean {
	let N = arr.length;
	let i = 0;
    
	while (i + 1 < N && arr[i] < arr[i + 1]) {
		i += 1;
	}

	if (i === 0 || i === N - 1) {
		return false;
	}

	while (i + 1 < N && arr[i] > arr[i + 1]) {
		i += 1;
	}

	return i === N - 1;
};