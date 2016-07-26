# 33. Search in Rotated Sorted Array

---

## Description

> Suppose a sorted array is rotated at some pivot unknown to you beforehand.
> (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
> You are given a target value to search. If found in the array return its index, otherwise return -1.
> You may assume no duplicate exists in the array.


## Javascript

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var i, l = nums.length, border = -1;
    for (i = 0; i < l - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            border = i;
        }
    }
    
    if (border === -1) {
        return binarySearch(nums, 0, l - 1, target);
    } else {
        var left = binarySearch(nums, 0, border, target);
        var right = binarySearch(nums, border + 1, l - 1, target);
        
        return left === -1 ? right : left;
    }
};

var binarySearch = function (nums, i, j, target) {
    var mid;
    while(i <= j) {
        mid = Math.floor( (i + j) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            j--;
        } else {
            i++;
        }
    }
    return -1;
};
```
