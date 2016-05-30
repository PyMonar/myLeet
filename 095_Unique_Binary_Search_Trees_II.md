# 95. Unique Binary Search Trees II

---

## Description

> Given n, generate all structurally unique BST's (binary search trees) that store values 1...n.

> For example,
> Given n = 3, your program should return all 5 unique BST's shown below.

```
1         3     3      2      1
 \       /     /      / \      \
  3     2     1      1   3      2
 /     /       \                 \
2     1         2                 3
```

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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    return generate(1, n);
};

var generate = function (m, n) {
    var results = [];
    if (m > n) {
        results.push(null);
    } else {
        for (var i = m; i <= n; i++) {
            var leftNodes = generate(m, i - 1);
            var rightNodes = generate(i + 1, n);
            for (var l in leftNodes) {
                 for (var r in rightNodes) {
                     var root = new TreeNode(i);
                     root.left = leftNodes[l];
                     root.right = rightNodes[r];
                     results.push(root);
                 }
             }
        }
    }
    return results;
};
```
