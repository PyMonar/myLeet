# 447. Number of Boomerangs

---

## Description

> Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).
> Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

```
Example:

Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]

```



## Java

思路：这题我也是醉了，hashtable，然后根据重复距离排列组合。

```java
public class Solution {
    public int numberOfBoomerangs(int[][] points) {
        int res = 0;
        HashMap<Integer, Integer> dic = new HashMap<Integer, Integer>();
        for (int i = 0; i < points.length; i++) {
            for (int j = 0; j < points.length; j++) {
                if (i == j) continue;
                int dis = dis(points[i], points[j]);
                // dic.put(dis, map.getOrDefault(dis, 0) + 1);
                if (dic.containsKey(dis)) {
                    dic.put(dis, dic.get(dis) + 1);
                } else {
                    dic.put(dis, 1);
                }
            }
            for (int d : dic.values()) {
                res += d * (d - 1);
            }
            dic.clear();
        }
        return res;
    }
    
    public int dis(int[] p, int[] q) {
        int l = p[0] - q[0];
        int w = p[1] - q[1];
        return l * l + w * w;
    }
}
```