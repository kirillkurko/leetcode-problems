/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const res = [];
    const map = new Map();
    
    for (let i = 0; i < groupSizes.length; ++i) {
        const temp = groupSizes[i];
        let group = [];
        
        if (map.has(temp)) {
            group = [...map.get(temp), i];
        } else {
            group = [i];
        }
        
        if (group.length === temp) {
            res.push(group);
            map.delete(temp);
        } else {
            map.set(temp, group);
        }
    }
    
    return res;
};