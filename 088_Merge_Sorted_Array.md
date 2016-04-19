# 88. Merge Sorted Array

---

## Description

> Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

> Note:
> You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
## Javascript

> 思路：主要要理解题意，在原数组的基础上修改。第一步准备数组，第二部合并数组。

```
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var p = nums1.length - m;
    while (p > 0) {
        nums1.pop();
        p--;
    }

    var q = nums2.length - n;
    while (q > 0) {
        nums2.pop();
        q--;
    }


    var i = 0,
        j = 0;

    var temp;
    while (j !== n && i !== nums1.length) {
        if (nums2[j] > nums1[i]) {
            i++;
        } else {
            temp = nums1[i];
            nums1.splice(i, 1, nums2[j], temp);
            i++;
            j++;
        }
    }

    if (i === nums1.length) {
        while (j !== n) {
            nums1.push(nums2[j]);
            j++;
        }
    }

};
```
