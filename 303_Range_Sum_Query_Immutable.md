# 303. Range Sum Query - Immutable

---

## Description

> Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

> Example:
```
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

```
> Note:
> 1,You may assume that the array does not change.
> 2,There are many calls to sumRange function.

## Javascript

```
/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.sums = [];

    var l = nums.length;
    if (l > 0) {
        this.sums.push(nums[0]);
        for (var i = 1; i < l; i++) {
            this.sums.push(this.nums[i] + this.sums[i - 1]);
        }
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (i === 0) {
        return this.sums[j];
    } else {
        return this.sums[j] - this.sums[i - 1];
    }
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
```
