# 238. Product of Array Except Self

---

## Description

> Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

> Solve it without division and in O(n).

> For example, given [1,2,3,4], return [24,12,8,6].

## Javascript

> 思路：建立数组，从左往右构建，每一个元素存放数组nums中当前值前边值的所有乘积，然后从右边往左构建，与之前过程相同，让数组中的值与nums中对应值的所有右边值的乘积相乘得到最终结果。

```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var result = [];
    var right, i, l = nums.length;
    for (i = 1, result.push(1); i < l; i++) {
        result.push(result[result.length - 1] * nums[i - 1]);
    }

    for (i = l - 2, right = nums[i + 1]; i >= 0 ; i--) {
        result[i] = result[i] * right;
        right *= nums[i];
    }

    return result;
};
```
