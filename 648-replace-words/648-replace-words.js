/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const words = sentence.split(' ');
	dictionary.sort((a, b) => a.length - b.length);

	return words.reduce((result, word) => {
		const successor = dictionary.find(diction => word.startsWith(diction));

		return `${result} ${successor ? successor : word}`;
	}, '').trim();
};