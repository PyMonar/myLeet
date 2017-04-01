# 35. Search Insert Position

---

## Description

> Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

> You may assume no duplicates in the array.

> Here are few examples.
> [1,3,5,6], 5 → 2
> [1,3,5,6], 2 → 1
> [1,3,5,6], 7 → 4
> [1,3,5,6], 0 → 0

## Javascript

解法一：直接查找，O(n)。

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.indexOf(target) !== -1) {
        return nums.indexOf(target);
    }
    var i;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
            return i;
        }
    }
    return nums.length;
};
```

## Java

解法二：二分查找，O(logn)。

```java
public class Solution {
    public int searchInsert(int[] nums, int target) {
        int mid, i = 0, j = nums.length - 1;
        while (i <= j) {
            mid = (i + j) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        }
        return i;
    }
}
```