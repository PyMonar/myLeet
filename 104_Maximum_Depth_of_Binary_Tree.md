# 104. Maximum Depth of Binary Tree
          

---

## Description

> Given a binary tree, find its maximum depth.
> The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


## Java

解法一：递归，树的最大深度等于根节点左子树和右子树各自最大深度的最大值再加一。

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
    public int maxDepth(TreeNode root) {
		if (root == null) {
			return 0;
		}
		int leftMax = this.maxDepth(root.left);
		int rightMax = this.maxDepth(root.right);
		root.val = leftMax > rightMax ? leftMax : rightMax;
		root.val += 1;
		return root.val;
	}
}
```

## Python

解法二：队列。先将根节点入队，然后循环取队列里边结点的左树和右树入队，然后出队父节点，然后对入队的左右树再进行重复操作，直到队列为空。这样的话，每一层外部循环就是树的最大深度加一。

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root == None:
            return 0
        q = [root]
        result = 0
        while len(q) > 0:
            l = len(q)
            while l > 0:
                cur = q.pop(0)
                if cur.left != None:
                    q.append(cur.left)
                if cur.right != None:
                    q.append(cur.right)
                l -= 1
            result += 1
        return result
```
