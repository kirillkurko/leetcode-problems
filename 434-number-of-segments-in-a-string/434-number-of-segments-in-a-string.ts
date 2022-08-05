function countSegments(s: string): number {
    if (s.trim().length === 0) {
        return 0;
    }
    
    return s.trim().split(' ').filter(w => w.length !== 0).length;
};