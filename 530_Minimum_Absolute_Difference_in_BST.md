# 530. Minimum Absolute Difference in BST
          

---

## Description

> Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

```
Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).

```


```
Note:
There are at least two nodes in this BST.
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
    public int minimum = Integer.MAX_VALUE;
	public int getMinimumDifference(TreeNode root) {
		if (root == null) {
			return Integer.MAX_VALUE;
		}
		int curMin = Integer.MAX_VALUE;
		int left = getMax(root.left);
		int right = getMin(root.right);
		if (left == -1 && right != -1) {
			curMin = right - root.val;
		} else if (left != -1 && right == -1) {
			curMin = root.val - left;
		} else if (left != -1 && right != -1) {
			curMin = right - root.val > root.val - left ? root.val - left : right - root.val;
		}
		
		if (curMin < minimum) {
			minimum = curMin;
		}
		
		getMinimumDifference(root.left);
		getMinimumDifference(root.right);
		return minimum;
	}
	
	public int getMax(TreeNode root) {
		if (root == null) {
			return -1;
		}
		if (root.right == null) {
			return root.val;
		} else {
			return getMax(root.right);
		}
	}
	
	public int getMin(TreeNode root) {
		if (root == null) {
			return -1;
		}
		if (root.left == null) {
			return root.val;
		} else {
			return getMin(root.left);
		}
	}
}
```
