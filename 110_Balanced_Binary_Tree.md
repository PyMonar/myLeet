# 110. Balanced Binary Tree

---

## Description

> Given a binary tree, determine if it is height-balanced.

> For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

## Javascript

> 思路：递归解法。递归计算树的深度，设置全局变量标记位，进行左右子树深度的比较，一旦发现不平衡就改变状态。PS：函数开头注意重置标记位。

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

var flag = true;

var isBalanced = function(root) {
    flag = true;
    if (root === null) {
        return true;
    }
    var leftHeight = treeHeight(root.left);
    var rightHeight = treeHeight(root.right);

    if (leftHeight - rightHeight > 1 || leftHeight - rightHeight < -1) {
        flag = false;
    }

    return flag;

};

var treeHeight = function (root) {
     if (root === null) {
         return 0;
     } else if ( root.left === null && root.right === null){
         return 1;
     } else {
         var l = treeHeight(root.left);
         var r = treeHeight(root.right);
         if (l - r > 1 || l - r < -1) {
             flag = false;
         }
         return 1 + ( l > r ? l : r);   
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
    public boolean isBalanced(TreeNode root) {
        if (root == null) return true;
        int diff = getHeight(root.left) - getHeight(root.right);
        return (diff <= 1 && diff >= -1) && isBalanced(root.left) && isBalanced(root.right);
    }
    
    public int getHeight(TreeNode root) {
        if (root == null) return 0;
        int lh = getHeight(root.left);
        int rh = getHeight(root.right);
        return lh > rh ? lh + 1 : rh + 1;
    }
}
```