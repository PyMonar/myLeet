# 105. Construct Binary Tree from Preorder and Inorder Traversal

---

## Description

> Given preorder and inorder traversal of a tree, construct the binary tree.

## Javascript


```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }

    var l = preorder.length;
    return solution(preorder, 0, l - 1, inorder, 0, l - 1);
};

var solution = function (preorder, i, j, inorder, m, n) {
    if (i > j || m > n) {
        return null;
    }
    var rootVal = preorder[i];
    var index = inorder.indexOf(rootVal);


    var root = new TreeNode(rootVal);

    root.left = solution(preorder, i + 1, i + index - m, inorder, m, index - 1);
    root.right = solution(preorder,  i + index - m + 1, j, inorder, index + 1, n);

    return root;
};
```
