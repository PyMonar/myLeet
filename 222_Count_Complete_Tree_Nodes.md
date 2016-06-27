# 222. Count Complete Tree Nodes

---

## Description

> Given a complete binary tree, count the number of nodes.

> Definition of a complete binary tree from Wikipedia:
> In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

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
 * @return {number}
 */

var countNodes = function(root) {
    if (root === null) {
        return 0;
    }

    var l = getLeft(root.left) + 1;
    var r = getRight(root.right) + 1;

    if (l === r) {
        return (2 << ( l - 1 )) - 1;
    } else {
        return countNodes(root.left) + countNodes(root.right) + 1;
    }
};

var getLeft = function (root) {
    if (root === null) {
        return 0;
    }
    var count = 1;
    while (root.left) {
        count++;
        root = root.left;
    }
    return count;
};

var getRight = function (root) {
    if (root === null) {
        return 0;
    }
    var count = 1;
    while (root.right) {
        count++;
        root = root.right;
    }
    return count;
};
```
