# 152. Maximum Product Subarray

---

## Description

> Find the contiguous subarray within an array (containing at least one number) which has the largest product.
> For example, given the array [2,3,-2,4],
> the contiguous subarray [2,3] has the largest product = 6.

## Javascript

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var max = nums[0], min = nums[0], result = max;
    for (var i = 1; i < nums.length; i++) {
        var maxtemp = max, mintemp = min;
        max = Math.max(maxtemp * nums[i], nums[i], mintemp * nums[i]);
        min = Math.min(mintemp * nums[i], nums[i], maxtemp * nums[i]);
        result = Math.max(max, result);
    }
    return result;
};
```
