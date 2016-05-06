# 144. Binary Tree Preorder Traversal

---

## Description

> Given a binary tree, return the preorder traversal of its nodes' values.

> For example:
> Given binary tree {1,#,2,3},

 ```
   1
    \
     2
    /
   3
```
> return [1,2,3].

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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    var result = [];
    pre(root, result);
    return result;

};

var pre = function (root, result) {
    if (root === null) {
        return;
    }
    result.push(root.val);
    pre(root.left, result);
    pre(root.right, result);
}
```
