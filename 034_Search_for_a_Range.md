# 34. Search for a Range

---

## Description

> Given a sorted array of integers, find the starting and ending position of a given target value.

> Your algorithm's runtime complexity must be in the order of O(log n).

> If the target is not found in the array, return [-1, -1].

> For example,
> Given [5, 7, 7, 8, 8, 10] and target value 8,
> return [3, 4].

## Javascript


```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [-1, -1];
    var l = nums.length;
    var flag = false;
    for (var i = 0; i < l; i++) {
        if (nums[i] === target) {
            if (result[0] === -1) {
                result[0] = i;
                result[1] = i;
            } else {
                result[1] = i;
            }
        }
    }
    return result;
};
```

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [-1, -1];
        var l = nums.length;
        var flag = false;
        for (var i = 0; i < l; i++) {
            if (nums[i] === target) {
                if (result[0] === -1) {
                    result[0] = i;
                    result[1] = i;
                } else {
                    result[1] = i;
                }
            }
        }
        return result;
};

var binarySearch = function (nums, i, j, target, result) {
    var index;
    while (i <= j) {
        index = Math.floor((i + j) / 2);
        if (nums[index] === target) {
            if (result[0] === -1) {
                result[0] = index;
                result[1] = index;
            } else {
                if (index >= result[1]) {
                    result[1] = index;
                }
                if (index <= result[0]){
                    result[0] = index;
                }
            }
            binarySearch(nums, i, index - 1, target, result);
            binarySearch(nums, index + 1, j, target, result);
            return;
        } else if (nums[index] > target){
            j = index - 1;
        } else {
            i = index + 1;
        }
    }
};
```
