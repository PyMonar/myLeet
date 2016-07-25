# 128. Longest Consecutive Sequence

---

## Description

> Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

> For example,

> Given [100, 4, 200, 1, 3, 2],

> The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

> Your algorithm should run in O(n) complexity.


## Javascript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    nums.sort(function (a, b) {
        return a - b;
    });
    
    var result = [], max = 1, i;
    result.push(1);
    
    for (i = 1; i < nums.length; i++) {
        result.push(1);
        if (nums[i] === nums[i - 1] + 1) {
            result[i] = result[i - 1] + 1;
            max = max > result[i] ? max : result[i];
        } else if (nums[i] === nums[i - 1]){
            result[i] = result[i - 1];
        } else {
            result[i] = 1;
        }
    }
    return max;
};
```
