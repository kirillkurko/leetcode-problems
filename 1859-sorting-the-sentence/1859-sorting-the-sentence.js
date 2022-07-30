/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const words = s.split(' ');
    
    let res = new Array(words.length).fill('');
    
    for (let i = 0; i < words.length; ++i) {
        const index = words[i].slice(-1);
        
        const word = words[i].slice(0, words[i].length - 1);
        
        res[Number.parseInt(index)] = word;
    }
    
    return res.join(' ').trim();
};