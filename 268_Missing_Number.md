# 268. Missing Number

---

## Description

> Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

> For example,
> Given nums = [0, 1, 3] return 2.

## Javascript

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var dic = {};
    for (var i = 0, l = nums.length; i < l; i++) {
        dic[nums[i]] = 1;
    }

    for (i = 0, l = nums.length; i < l ; i++ ) {
        if (dic[i] === undefined) {
            return i;
        }
    }
    return nums.length;
};

```
