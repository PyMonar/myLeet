# 111. Minimum Depth of Binary Tree

---

## Description

> Given a binary tree, find its minimum depth.

> The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

## Javascript

> 思路：递归解法。

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var min;
var minDepth = function(root) {
    min = Number.MAX_VALUE;
    if (root === null) {
        return 0;
    }

    var deep = 0;
    treeDept(root, deep);
    return min;
};

var treeDept = function (root, deep) {
    deep++;

    if (root.left === null && root.right === null) {
        min = deep < min ? deep : min;
    }

    if (root.left !== null) {
        treeDept(root.left, deep);       
    }
    if (root.right !== null) {
        treeDept(root.right, deep);  
    }
}
```
