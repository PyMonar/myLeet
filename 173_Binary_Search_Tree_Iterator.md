# 173. Binary Search Tree Iterator

---

## Description

> Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

> Calling next() will return the next smallest number in the BST.

> Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.

## Javascript


```
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.root = root;
    this.stack = [];
    init(this.root, this.stack);
    function init(root, stack) {
        if (root === null) {
            return;
        }

        init(root.right, stack);
        stack.push(root.val);
        init(root.left, stack);
    }

};



/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length !== 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    return this.stack.pop();
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
```
