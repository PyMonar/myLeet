# 109. Convert Sorted List to Binary Search Tree

---

## Description

> Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

## Javascript

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head === null) {
        return null;
    }
    var l = getLength(head);
    return createTree(head, 0, l - 1);
};

var createTree = function (nodes, i, j) {
    if (i > j) {
        return null;
    }

    var mid = Math.floor((i + j) / 2);
    var p = nodes;
    for (var s = i; s <= mid - 1; s++) {
        p = p.next;
    }

    var root = new TreeNode(p.val);
    var left = createTree(nodes, i, mid - 1);
    var right = createTree(p.next, mid + 1, j);

    root.left = left;
    root.right = right;

    return root;
};

var getLength = function (list) {
    var l = 0;
    while (list !== null) {
        l ++;
        list = list.next;
    }

    return l;
};
```
