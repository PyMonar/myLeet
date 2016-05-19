# 129. Sum Root to Leaf Numbers

---

## Description

> Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

> An example is the root-to-leaf path 1->2->3 which represents the number 123.

> Find the total sum of all root-to-leaf numbers.

> For example,

```
    1
   / \
  2   3
```

> The root-to-leaf path 1->2 represents the number 12.
> The root-to-leaf path 1->3 represents the number 13.

> Return the sum = 12 + 13 = 25.

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

var result;
var sumNumbers = function(root) {
    if (root === null) {
        return 0;
    }

    result = 0;
    var str = '';
    solution(root, str);

    return result;
};

var solution = function (root, str) {
    if (root.left === null && root.right === null) {
        str += root.val;
        result += str - 0;
        return;
    }

    str += root.val;
    if (root.left !== null) {
        solution(root.left, str);
    }

    if (root.right !== null) {
        solution(root.right, str);
    }

};
```
