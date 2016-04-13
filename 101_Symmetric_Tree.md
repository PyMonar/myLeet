# 101. Symmetric Tree

---

## Description

> Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).


## Javascript

> 思路：递归解法。判断左子树是否与右子树相等即可。

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
 * @return {boolean}
 */
var flag;
var isSymmetric = function(root) {
    flag = true;
    if (root === null) {
        return flag;
    }
    Symmetric(root.left, root.right);
    return flag;
};

var Symmetric = function(left, right) {
    if (left !== null && right !== null) {
        if (left.val !== right.val) {
            flag = false;
        } else {
            Symmetric(left.left, right.right);
            Symmetric(left.right, right.left);
        }
    } else if (left === null && right === null) {

    } else {
        flag = false;
    }
}


```
