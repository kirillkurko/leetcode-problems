function destCity(paths: string[][]): string {
    const map = new Map();
	map.set(paths[0][0], paths[0][1]);
    
	let last = paths[0][1];

	while (true) {
		let flag = false;
		for(let i = 1; i < paths.length; ++i) {
			if (paths[i][0] === last) {
				flag = true;
				map.set(paths[i][0], paths[i][1]);
				last = paths[i][1];
			}
		}

		if (!flag) {
			break;
		}
	}

	return last;
};