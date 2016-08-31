# 4. Median of Two Sorted Arrays

---

## Description

> There are two sorted arrays nums1 and nums2 of size m and n respectively.

> Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

```
Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```

```
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

## Python
```python
class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        merge = []
        i, j = 0, 0
        l1, l2 = len(nums1), len(nums2)
        while i < l1 and j < l2:
            if nums1[i] <= nums2[j]:
                merge.append(nums1[i])
                i += 1
            else:
                merge.append(nums2[j])
                j += 1
        if i == l1:
            merge += nums2[j:]
        if j == l2:
            merge += nums1[i:]
        lm = len(merge) - 1
        if lm % 2 == 0:
            return merge[lm / 2];
        else:
            return float((merge[lm / 2] + merge[lm / 2 + 1]) / 2.0)
        
```