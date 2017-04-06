# 27. Remove Element

---

## Description

> Given an array and a value, remove all instances of that value in place and return the new length.

> Do not allocate extra space for another array, you must do this in place with constant memory.

> The order of elements can be changed. It doesn't matter what you leave beyond the new length.

> Example:
> Given input array nums = [3,2,2,3], val = 3

> Your function should return length = 2, with the first two elements of nums being 2.

## Javascript

> 思路：splice库函数解决数组自身切割问题。

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var l = nums.length;
    for (var i = 0; i < l; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};
```

## Java

解法一：双指针。

```java
public class Solution {
    public int removeElement(int[] nums, int val) {
        int i = 0, j = nums.length - 1, cnt = 0;
        while (i < j) {
            while (nums[i] != val && i < j) {
                i++;
            }
            int tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            j--;
        }
        j = nums.length - 1;
        while (j >= 0 && nums[j] == val) {
            cnt++;
            j--;
        }
        return nums.length - cnt;
    }
}
```

解法二：单指针覆盖法。

```java
public class Solution {
    int removeElement(int A[], int elem) {
        int begin = 0;
        for(int i = 0;i < A.length; i++) {
            if(A[i] != elem) {
                A[begin++] = A[i];
            }
        }
        return begin;
    }
}
```