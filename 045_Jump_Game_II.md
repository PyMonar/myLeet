# 45. Jump Game II

---

## Description

> Given an array of non-negative integers, you are initially positioned at the first index of the array.

> Each element in the array represents your maximum jump length at that position.

> Your goal is to reach the last index in the minimum number of jumps.

> For example:

> Given array A = [2,3,1,1,4]

> The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)


## Javascript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var greedy = [], i, j;
    var l = nums.length;
    for (i = 0; i < l; i++) {
        greedy.push(l);
    }
    greedy[0] = 0;
    
    var step, maxIndex = 0;
    for (i = 0; i <l; i++) {
        step = nums[i];
        if (maxIndex > i + step) {
            continue;
        }
        
        for (j = maxIndex + 1; j <= i + step && j < l; j++) {
            greedy[j] = greedy[j] < (greedy[i] + 1) ? greedy[j] : greedy[i] + 1;
        }
        
        maxIndex = i + step;
    }
    
    return greedy[l - 1];
};
```

## Python

```python
class Solution(object):
    def jump(self, nums):
        l = len(nums)
        g = [l for i in range(l)]
        g[0] = 0
        maxIndex = 0
        for i in range(l):
            step = nums[i]
            if (step + i) <= maxIndex:
                continue
            j = maxIndex + 1
            while j < l and j <= i + step:
                g[j] = g[j] if g[j] < g[i] + 1 else g[i] + 1
                j += 1
            maxIndex = i + step
        return g[- 1]
```