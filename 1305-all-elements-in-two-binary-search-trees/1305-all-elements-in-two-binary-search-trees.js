/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const res = [];
    
    const traverse = (root) => {
        if (!root) {
            return;
        }
        traverse(root.left);
        res.push(root.val);
        traverse(root.right);
    }
    
    traverse(root1);
    traverse(root2);
    
    return res.sort((a, b) => a - b);
};