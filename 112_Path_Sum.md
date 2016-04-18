# 112. Path Sum

---

## Description

> Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

> For example:
> Given the below binary tree and sum = 22,
```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
```
> return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

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
 * @param {number} sum
 * @return {boolean}
 */

var find;
var hasPathSum = function(root, sum) {
    if (root === null) {
        return false;
    }
    var total = 0;
    find = false;
    findSum(root, total, sum);
    return find;

};

var findSum = function (root, total, sum) {
    if (root.left === null && root.right === null && total + root.val === sum) {
        find = true;
    }
    total += root.val;
    if (root.left !== null) {
        findSum(root.left, total, sum);
    }
    if (root.right !== null) {
        findSum(root.right, total, sum);
    }
}
```
