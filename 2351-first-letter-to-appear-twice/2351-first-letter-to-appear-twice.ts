function repeatedCharacter(s: string): string {
    const set = new Set()
    
    for (let i = 0; i < s.length; ++i) {
        if (!set.has(s[i])) {
            set.add(s[i]);
        }
        else {
            return s[i];
        }
    }
};