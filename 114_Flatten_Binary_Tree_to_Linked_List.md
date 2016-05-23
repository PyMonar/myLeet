# 114. Flatten Binary Tree to Linked List

---

## Description

> Given a binary tree, flatten it to a linked list in-place.

> For example,
> Given

```
         1
        / \
       2   5
      / \   \
     3   4   6
```
> The flattened tree should look like:

```
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
```

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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function (root) {
    if (root === null) {
        return;
    }
    if (root.left === null) {
        flatten(root.right);
    } else {
        var temp = root.right;
        root.right = root.left;
        root.left = null;
        putRight(root.right, temp);
        flatten(root.right);
    }
};

var putRight = function (root, right) {
    if (root.right === null) {
        root.right = right;
    } else {
        putRight(root.right, right);
    }
};

```
