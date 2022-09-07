/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];

    const track = (cur) => {
        if (cur.length === nums.length) {
            ans.push(cur);
            return;
        }

        for (const num of nums) {
            if (!cur.includes(num)) track([...cur, num]);
        }
    }

  track([]);

  return ans;
};