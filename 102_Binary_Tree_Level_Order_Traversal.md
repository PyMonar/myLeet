# 102. Binary Tree Level Order Traversal

---

## Description

> Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

> For example:
> Given binary tree {3,9,20,#,#,15,7},

```
   3  
  / \
 9  20
   /  \
  15   7
```
> return its level order traversal as:

```
[
  [3],
  [9,20],
  [15,7]
]
```

## Javascript

> 思路：依靠队列手段解决。
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    var quene = [root];
    var result = [];
    var layer;
    var pop = 1;
    var cur;
    while (quene.length !== 0) {
        layer = [];
        while(pop) {
            cur = quene.shift();
            if (cur.left !== null) {
                quene.push(cur.left);
            }
            if (cur.right !== null) {
                quene.push(cur.right);
            }
            layer.push(cur.val);
            pop--;
        }
        result.push(layer);
        pop = quene.length;
    }
    return result;

};
```
