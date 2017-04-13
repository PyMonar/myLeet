# 26. Remove Duplicates from Sorted Array

---

## Description

> Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

> Do not allocate extra space for another array, you must do this in place with constant memory.

> For example,
> Given input array nums = [1,1,2],

> Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
## Javascript

> 思路：hash判断是否重复，然后使用splice方法。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var dic = {};
    for (var i = 0; i < nums.length; i++) {
        if (dic[nums[i]] === undefined) {
            dic[nums[i]] = 1;
        } else {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};
```

## Java

解法： 双指针，一个指向已经去重的位置，一个指向下一个该出现的元素。

```java
public class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length <= 1) return nums.length;
        int i = 1, j = 1;
        while (i < nums.length && j < nums.length) {
            if (nums[i] <= nums[i - 1]) {
                while (j < nums.length && nums[j] <= nums[i - 1]) j++;
                if (j == nums.length) break;
                nums[i] = nums[j];
                i++;
                j++;
            } else {
                i++;
            }
        }
        return i;
    }
}
```

解法二：（这个更简单）

```java
public class Solution {
    public int removeDuplicates(int A[], int n) {
        if(n < 2) return n;
        int id = 1;
        for(int i = 1; i < n; ++i) 
            if(A[i] != A[i-1]) A[id++] = A[i];
        return id;
    }
};
```