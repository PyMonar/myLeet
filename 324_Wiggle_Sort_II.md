# 324. Wiggle Sort II

---

## Description


> Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....


> Example:
> (1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6]. 
> (2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].


## Javascript

```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    var temp = nums.slice();
    
    var l = nums.length;
    var i, j = l - 1;
    for (i = 1; i < l; i += 2, j--) {
        nums[i] = temp[j];
    }
    for (i = 0; i < l; i += 2, j--) {
        nums[i] = temp[j];
    }
};
```
