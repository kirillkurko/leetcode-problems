const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function romanToInt(s: string): number {
    let res = 0;
    
    for (let i = 0; i < s.length; ++i) {
        const curr = map[s[i]];
        const next = map[s[i + 1]];
        res += curr < next ? - curr : curr;
    }
    
    return res;
};


