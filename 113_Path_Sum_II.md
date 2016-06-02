# 113. Path Sum II

---

## Description

> Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

> For example:
> Given the below binary tree and sum = 22,

```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
```
> return

```
[
   [5,4,11,2],
   [5,8,4,5]
]
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
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var result;
var pathSum = function(root, sum) {
    if (root === null) {
        return [];
    }

    result = [];

    solution(root, sum, []);

    return result;
};

var solution = function (root, sum, collect) {
    if (root.left === null && root.right === null) {
        if (sum - root.val === 0) {
            collect.push(root.val);
            result.push(collect);
        }

        return;
    }

    collect.push(root.val);

    if (root.left !== null) {
        solution(root.left, sum - root.val, collect.slice());
    }

    if (root.right !== null) {
        solution(root.right, sum - root.val, collect.slice());
    }
};
```
