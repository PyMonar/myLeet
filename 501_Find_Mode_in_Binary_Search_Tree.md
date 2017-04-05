# 501. Find Mode in Binary Search Tree

---

## Description

> Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

```
Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
```


```
For example:
Given BST [1,null,2,2],

   1
    \
     2
    /
   2

```

> return [2].

```
Note:
If a tree has more than one mode, you can return them in any order.
```

```
Follow up:
Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
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
    public HashMap<Integer, Integer> dic = new HashMap<Integer, Integer>();
    public int maxTimes = 0;
    public int[] findMode(TreeNode root) {
        find(root);
        List<Integer> li = new ArrayList<Integer>();
        for (int key : dic.keySet()) {
            if (dic.get(key) == maxTimes) {
                li.add(key);
            }
        }
        
        int[] res = new int[li.size()];
        for (int i = 0; i < li.size(); i++) {
            int num = (int)li.get(i);
            res[i] = num;
        }
        return res;
    }
    
    public void find(TreeNode root) {
        if (root == null) return;
        dic.put(root.val, dic.getOrDefault(root.val, 0) + 1);
        maxTimes = maxTimes > dic.get(root.val) ? maxTimes : dic.get(root.val);
        find(root.left);
        find(root.right);
    }
}
```