# 16. 3Sum Closest

---

## Description

> Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

```
    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

## Javascript


```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function (a, b) {
        return a - b;
    });

    var sum = nums[1] + nums[2] + nums[0];
    var abs = Math.abs(target - sum);

    var i, j, k, l = nums.length;
    for (i = 0; i < l - 2; i++) {
        for (j = i + 1; j < l - 1; j ++) {
            var close = binarySearch(nums, j + 1, l - 1, target - nums[i] - nums[j]);
            var temp = Math.abs(nums[i] + nums[j] + close - target);
            if (abs > temp) {
                sum = nums[i] + nums[j] + close;
                abs = temp;
            }

        }
    }

    return sum;
};


var binarySearch = function (nums, i, j, target) {
    var index = Math.floor( (i + j) / 2),
        temp = Math.abs(nums[index] - target),
        result = nums[index];
    while (i <= j) {
        index = Math.floor( (i + j) / 2);

        if (temp >= Math.abs(nums[index] - target)) {
            temp = Math.abs(nums[index] - target);
            result = nums[index];
        }

        if (temp === 0) {
            return result;
        }

        if (nums[index] > target) {
            j = index - 1;
        } else {
            i = index + 1;
        }
    }

    return result;
};
```
