/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let res = 0;

	let map = new Map();
    
	for (const char of chars) {
		map.set(char, (map.get(char) ?? 0) + 1);
	}

	for (let i = 0; i < words.length; ++i) {
		let tempMap = new Map(map);
		let j = words[i].length;
		while (--j >= 0) {
			let char = tempMap.get(words[i][j]);
			if (!char) {
                break;
            }
			tempMap.set(words[i][j], --char);
		}
		if (j === -1) {
            res += words[i].length;
        }
	}

	return res;
};