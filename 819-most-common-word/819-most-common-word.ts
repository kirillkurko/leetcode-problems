function mostCommonWord(paragraph: string, banned: string[]): string {
    const map = {};
    let count = 0;
    let maxWord = '';
    const words = paragraph.replace(/[^\w\s]/g, ' ').toLowerCase().split(' ');
       
    words.forEach(word => {
        if (!banned.includes(word) && word) {
            map[word] = map[word] || 0;
            map[word] += 1;
            if (map[word] > count) {
                count = map[word];
                maxWord = word;
            }
        }
    })
    
    return maxWord;
};