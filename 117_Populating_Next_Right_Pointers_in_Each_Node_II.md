# 117. Populating Next Right Pointers in Each Node II

---

## Description

> Follow up for problem "Populating Next Right Pointers in Each Node".

> What if the given tree could be any binary tree? Would your previous solution still work?

> Note:

> You may only use constant extra space.


> For example,

> Given the following binary tree,

```
         1
       /  \
      2    3
     / \    \
    4   5    7
```
> After calling your function, the tree should look like:

```
        1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL

```

## Javascript

```javascript
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (root === null) {
        return;
    }
    var q = [];
    q.push(root);
    var i;
    while (q.length !== 0) {
        var l = q.length;
        for (i = 0; i < l - 1; i++) {
            q[i].next = q[i + 1];
        }
        
        for (i = 0; i < l; i++) {
            var cur = q.shift();
            if (cur.left !== null) {
                q.push(cur.left);
            }
            if (cur.right !== null) {
                q.push(cur.right);
            }
        }
    }
};
```
