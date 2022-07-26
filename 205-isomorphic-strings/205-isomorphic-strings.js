/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let seenLeft = new Map();
    let seenRight = new Map();

    for (i = 0; i < t.length; ++i) {
        if(!seenLeft.has(s[i]) && !seenRight.has(t[i])) {
            seenLeft.set(s[i], t[i]);
            seenRight.set(t[i], s[i]);
        }
        else if((seenLeft.get(s[i]) !== t[i] || seenRight.get(t[i]) !== s[i])) {
            return false;
        }
    }
    return true;
};