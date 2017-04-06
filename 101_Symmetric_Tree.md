# 101. Symmetric Tree

---

## Description

> Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

But the following [1,2,2,null,3,null,3] is not:

```
    1
   / \
  2   2
   \   \
   3    3
```

## Javascript

> 思路：递归解法。判断左子树是否与右子树相等即可。

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

## Java

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (root == null) return true;
        return isSame(root.left, root.right);
    }
    
    public boolean isSame(TreeNode left, TreeNode right) {
        if (left == null && right == null) {
            return true;
        } else if (left != null && right != null && left.val == right.val) {
            return isSame(left.left, right.right) && isSame(left.right, right.left);
        } else {
            return false;
        }
    }
}
```