# 209. Minimum Size Subarray Sum

---

## Description

> Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

> For example, given the array [2,3,1,2,4,3] and s = 7,
> the subarray [4,3] has the minimal length under the problem constraint.

## Javascript


```
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var start = 0, end = 0;
    var l = nums.length;
    var result = l + 1;
    var sum = 0;

    while (end < l) {
        while (end < l && sum < s) {
            sum += nums[end++];
        }

        while (sum >= s) {
            result = result < (end - start) ? result : end - start;
            sum -= nums[start++];
        }
    }

    return result === l + 1 ? 0 : result;

};
```
