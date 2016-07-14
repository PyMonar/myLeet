# 98. Validate Binary Search Tree

---

## Description

> Given a binary tree, determine if it is a valid binary search tree (BST).

> Assume a BST is defined as follows:

> 1. The left subtree of a node contains only nodes with keys less than the node&apos;s key.

> 2. The right subtree of a node contains only nodes with keys greater than the node&apos;s key.

> 3. Both the left and right subtrees must also be binary search trees.

> Example 1:

```
    2
   / \
  1   3
```

> Binary tree [2,1,3], return true.

> Example 2:

```
    1
   / \
  2   3
```

> Binary tree [1,2,3], return false.

## Javascript

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var MIN = Number.MIN_SAFE_INTEGER;
    var MAX = Number.MAX_SAFE_INTEGER;
    return valid(root, [MIN, MAX]);
};

var valid = function (root, range) {
    if (root === null) {
        return true;
    }
    if (root.val >= range[1] || root.val <= range[0]) {
        return false;
    }
    var rangel = range.slice();
    rangel[1] = root.val;
    var ranger = range.slice();
    ranger[0] = root.val;
    
    return valid(root.left, rangel) && valid(root.right, ranger);
};
```
