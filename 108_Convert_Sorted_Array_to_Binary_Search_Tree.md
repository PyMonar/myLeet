# 108. Convert Sorted Array to Binary Search Tree

---

## Description

> Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    return buildBST(nums, 0, nums.length - 1);
};

var buildBST = function (nums, i, j) {
    if (i === j) {
        return new TreeNode(nums[i]);
    }

    var rootIndex = Math.floor( (i + j) / 2);

    var root = new TreeNode(nums[rootIndex]);
    if (i < rootIndex) {
        root.left = buildBST(nums, i, rootIndex - 1);
    }

    if ( j > rootIndex){
        root.right = buildBST(nums, rootIndex + 1, j);   
    }

    return root;
};
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
    public TreeNode sortedArrayToBST(int[] nums) {
        if (nums == null || nums.length == 0) return null;
        return build(nums, 0, nums.length - 1);
    }
    
    public TreeNode build(int[] nums, int i, int j) {
        if (i > j) return null;
        int mid = (i + j) / 2;
        TreeNode root = new TreeNode(nums[mid]);
        root.left = build(nums, i, mid - 1);
        root.right = build(nums, mid + 1, j);
        return root;
    }
}
```