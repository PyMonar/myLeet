# 55. Jump Game

---

## Description

> Given an array of non-negative integers, you are initially positioned at the first index of the array.

> Each element in the array represents your maximum jump length at that position.

> Determine if you are able to reach the last index.

> For example:
> A = [2,3,1,1,4], return true.

> A = [3,2,1,0,4], return false.

## Javascript


```
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var result = [];

    if (nums.length === 1) {
        return true;
    }

    var i, j;
    for (i = 1; i < nums.length; i++) {
        result.push(0);
    }

    var l = nums.length;
    i = 0, j = nums[0] + i;
    while (i <= j) {
        if (nums[i] + i > j) {
            j = nums[i] + i;
        }
        if (j >= l - 1) {
            return true;
        }
        i++;
    }

    return false;
};
```
