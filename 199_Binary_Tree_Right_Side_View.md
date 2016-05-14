# 199. Binary Tree Right Side View

---

## Description

> Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

> For example:

> Given the following binary tree,

```
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```

> You should return [1, 3, 4].

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    var result = [];
    if (root === null) {
        return [];
    }
    var q = [];
    q.push(root);
    var ql;
    while (q.length !== 0) {
        ql = q.length;
        result.push(q[ql - 1].val);

        for (var i = 0; i < ql; i++) {
            var temp = q.shift();
            if (temp.left !== null) {
                q.push(temp.left);
            }

            if (temp.right !== null) {
                q.push(temp.right);
            }
        }
    }
    return result;
};
```
