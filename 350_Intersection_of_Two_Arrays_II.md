# 350. Intersection of Two Arrays II

---

## Description

> Given two arrays, write a function to compute their intersection.

```
Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
```


```
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

```


```
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1&apos;s size is small compared to nums2&apos;s size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

```



## Javascript

解法一：先排序，然后双指针将共有的元素纳入结果集。

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort(function (a, b) {
        return a - b;
    });
    
    nums2.sort(function (a, b) {
        return a - b;
    });
    
    var result = [];
    var i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
};
```

## Java

解法二：hashmap。

```java
public class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        List<Integer> list = new ArrayList<Integer>();
        HashMap<Integer, Integer> dic1 = new HashMap<Integer, Integer>();
        HashMap<Integer, Integer> dic2 = new HashMap<Integer, Integer>();
        
        for (int num : nums1) {
            if (dic1.containsKey(num)) {
                dic1.put(num, dic1.get(num) + 1);
            } else {
                dic1.put(num, 1);
            }
        }
        
        for (int num : nums2) {
            if (dic2.containsKey(num)) {
                dic2.put(num, dic2.get(num) + 1);
            } else {
                dic2.put(num, 1);
            }
        }
        
        int larger;
        for (int num: dic1.keySet()) {
            if (dic2.containsKey(num)) {
                larger = dic1.get(num) < dic2.get(num) ? dic1.get(num) : dic2.get(num);
                for (int i = 0; i< larger; i++) {
                    list.add(num);
                }
            }
        }

        int[] result = new int[list.size()];
        for (int i = 0; i < result.length; i++) {
            result[i] = (int)list.get(i);
        }
        return result;
    }
}
```