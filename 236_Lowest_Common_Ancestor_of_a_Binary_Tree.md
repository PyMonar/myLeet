# 236. Lowest Common Ancestor of a Binary Tree

---

## Description

> Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

> According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

```
        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
```

> For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var flag;
var lowestCommonAncestor = function(root, p, q) {
    var resultp = [];
    var resultq = [];
    
    flag = false;
    findNode(root, p, resultp);

    flag = false;
    findNode(root, q, resultq);

    var same;
    var tp, tq;
    while (resultp.length !== 0 && resultq.length !== 0) {
        tp = resultp.pop();
        tq = resultq.pop();

        if (tq === tp) {
            same = tp;
        } else {
            break;
        }
    }
    return same;
};

var findNode = function (root, node, result) {
    if (root === null) {
        return;
    }

    if (root === node) {
        flag = true;
        result.push(root);
    } else {
        findNode(root.left, node, result);
        if (flag) {
            result.push(root);
            return;
        }
        findNode(root.right, node, result);
        if (flag) {
            result.push(root);
        }
    }
};
```
