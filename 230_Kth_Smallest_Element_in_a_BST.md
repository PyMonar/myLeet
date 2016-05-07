# 230. Kth Smallest Element in a BST

---

## Description

> Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

> Note:
> You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
    var result = [];
    bst(root, result);
    return result[k - 1];
};

var bst = function (root, result) {
    if (root === null) {
        return;
    }
    if (root.left === null && root.right === null) {
        result.push(root.val);
        return;
    }
    if (root.left !== null) {
        bst(root.left, result);
    }
    result.push(root.val);

    if (root.right !== null) {
        bst(root.right, result);
    }
}
```
