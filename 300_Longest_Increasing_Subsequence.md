# 300. Longest Increasing Subsequence

---

## Description

> Given an unsorted array of integers, find the length of longest increasing subsequence.

> For example,
> Given [10, 9, 2, 5, 3, 7, 101, 18],
> The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

> Your algorithm should run in O(n2) complexity.

## Javascript


```
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
    var result = [];
    var max_length = 0;
    var i, j, l = nums.length;
    for (i = 0; i < l; i++) {
        var max = 0;
        for (j = 0; j <= i - 1; j ++) {
            if (nums[j] < nums[i]) {
                max = result[j] > max ? result[j] : max;
            }
        }
        result[i] = max + 1;
        max_length = max_length > result[i] ? max_length : result[i];
    }

    return max_length;
};
```
