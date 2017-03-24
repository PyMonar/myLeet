# 349. Intersection of Two Arrays

---

## Description

> Given two arrays, write a function to compute their intersection.

```
Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
```


```
Note:

Each element in the result must be unique.
The result can be in any order.

```



## Java

```java
import java.util.HashSet;

public class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        HashSet<Integer> result = new HashSet<Integer>();
        HashSet<Integer> hs1 = new HashSet<Integer>();
        HashSet<Integer> hs2 = new HashSet<Integer>();
        for (int num : nums1) {
            hs1.add(num);
        }
        for (int num : nums2) {
            hs2.add(num);
        }
        result.addAll(hs1);
        result.retainAll(hs2);

        Object[] obj = result.toArray();
        int[] res = new int[obj.length];

        for (int i = 0; i < obj.length; i++) {
            res[i] = (int)obj[i];
        }
        return res;
    }
}
```