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

```
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
