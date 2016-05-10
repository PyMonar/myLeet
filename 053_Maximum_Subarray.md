# 53. Maximum Subarray

---

## Description

> Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

> For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
> the contiguous subarray [4,−1,2,1] has the largest sum = 6.


## Javascript


```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
     var sums = nums[0], max = nums[0];

     for ( i = 1; i < nums.length; i++) {
         if (sums < 0) {
             sums = 0;
         }

         sums += nums[i];

         if (max < sums) {
             max = sums;
         }
     }
     return max;
};

```
