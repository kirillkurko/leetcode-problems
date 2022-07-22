function validMountainArray(arr: number[]): boolean {
	let highest;
	if (arr.length < 3 || arr[0] >= arr[1]) {
		return false;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			return false;
		}
		if (!highest && arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
			highest = arr[i];
			if (arr[i + 1] === undefined) {
				return false;
			}
			continue;
		}
		if (highest) {
			if (arr[i] >= arr[i - 1]) {
				return false;
			}
		}
	}
	if (!highest) {
		return false;
	}
	return true;
};