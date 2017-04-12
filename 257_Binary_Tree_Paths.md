# 257. Binary Tree Paths

---

## Description

> Given a binary tree, return all root-to-leaf paths.

> For example, given the following binary tree:
```
   1
 /   \
2     3
 \
  5
```
> All root-to-leaf paths are:

> ["1->2->5", "1->3"]

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
 * @return {string[]}
 */
var result;
var binaryTreePaths = function(root) {
    if (root === null) {
        return [];
    }
    result = [];
    treePath(root, '');
    return result;
};

var treePath = function (root, path) {
    path += root.val;
    if (root.left === null && root.right === null) {
        result.push(path);
    }
    if (root.left !== null) {
        treePath(root.left, path + '->');
    }

    if (root.right !== null) {
        treePath(root.right, path + '->');
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
    public List<String> res = new ArrayList<String>();
    public List<String> binaryTreePaths(TreeNode root) {
        if (root != null) findPath(root, "");
        return res;
    }
    
    public void findPath(TreeNode root, String preFix) {
        preFix += root.val;
        if (root.left == null && root.right == null) res.add(preFix);
        if (root.left != null) findPath(root.left, preFix + "->");
        if (root.right != null) findPath(root.right, preFix + "->");
    }
}
```