# 107. Binary Tree Level Order Traversal II

---

## Description

> Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

> For example:
Given binary tree {3,9,20,#,#,15,7},

```
    3
   / \
  9  20
    /  \
   15   7
```

> return its bottom-up level order traversal as:

```
[
  [15,7],
  [9,20],
  [3]
]
```


## Javascript

> 思路：核心是利用队列，将同一层树节点放入队列，并处理父节点的输出，循环往复直至队列为空即可。另外，注意队列操作的时候循环下表的问题。PS：叮嘱我，跌倒不应放弃。

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
 * @return {number[][]}
 */

var levelOrderBottom = function(root) {
    if (root === null) {
        return [];
    }
    var results = [];
    var quene = [root];
    var result;
    var count = quene.length;
    while (count !== 0) {
        for (var i = 0; i < count; i++) {
            if (quene[i].left !== null) {
                quene.push(quene[i].left);
            }

            if (quene[i].right !== null) {
                quene.push(quene[i].right);
            }
        }
        result = [];
        for (var k = 0; k < count; k++) {
            result.push(quene[0].val);
            quene.shift();
        }
        results.unshift(result);
        count = quene.length;
    }

    return results;

};
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
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if (root == null) return res;
        LinkedList<TreeNode> q = new LinkedList<TreeNode>();
        q.add(root);
        while (!q.isEmpty()) {
            ArrayList<Integer> line = new ArrayList<Integer>();
            int count = q.size();
            TreeNode cur;
            while (count > 0) {
                cur = q.poll();
                line.add(cur.val);
                if (cur.left != null) q.add(cur.left);
                if (cur.right != null) q.add(cur.right);
                count--;
            }
            res.add(0, line);
        }
        return res;
    }
}
```