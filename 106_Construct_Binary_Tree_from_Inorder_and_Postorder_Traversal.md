# 106. Construct Binary Tree from Inorder and Postorder Traversal

---

## Description

> Given inorder and postorder traversal of a tree, construct the binary tree.

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
* @param {number[]} inorder
* @param {number[]} postorder
* @return {TreeNode}
*/
var buildTree = function(inorder, postorder) {
    if (postorder.length === 0) {
        return null;
    }
    var l = postorder.length;
    return solution(inorder, 0, l - 1, postorder, 0, l - 1);
};

var solution = function (inorder, i, j, postorder, m, n) {
    if (i > j || m > n) {
        return null;
    }

    var rootVal = postorder[n];

    var root = new TreeNode(rootVal);
    var index = inorder.indexOf(rootVal);

    root.left = solution(inorder, i, index - 1,  postorder, m, m + index - 1 - i);
    root.right = solution(inorder, index + 1, j,  postorder, m + index - i, n - 1);

    return root;
};
```
