# 99. Recover Binary Search Tree

---

## Description

> Two elements of a binary search tree (BST) are swapped by mistake.

> Recover the tree without changing its structure.


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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    var arr = [];
    arr = getArr(root);
    
    arr.unshift(new TreeNode(Number.MIN_SAFE_INTEGER));
    arr.push(new TreeNode(Number.MAX_SAFE_INTEGER));
    
    var first = arr[1], second = arr[arr.length - 2];
    
    for (var i = 1; i < arr.length - 1; i++) {
        if (arr[i].val >= arr[i - 1].val && arr[i].val >= arr[i + 1].val && arr[i].val >= first.val) {
            first = arr[i];
        } else if (arr[i].val <= arr[i - 1].val && arr[i].val <= arr[i + 1].val && arr[i].val <= second.val) {
            second = arr[i];
        }
    }
    
    var temp = first.val;
    first.val = second.val;
    second.val = temp;
};

var getArr = function (root) {
    if (root === null) {
        return [];
    }
    return getArr(root.left).concat([root], getArr(root.right));
};
```