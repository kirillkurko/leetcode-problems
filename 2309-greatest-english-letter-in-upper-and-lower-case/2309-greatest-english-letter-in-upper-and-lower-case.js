/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const set = new Set(s);
	let res = '';

	for(const item of set) {
		const temp = item.toUpperCase();
		if (set.has(item.toLowerCase()) && set.has(temp) && temp > res) {
			res =  temp;
		}
	}

	return res;
};