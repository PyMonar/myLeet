# 220. Contains Duplicate III

---

## Description

> Given an array of integers, find out whether there are two distinct indices i and j in the array such that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.

## Javascript

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (!nums || nums.length < 2) return false;
    
    var indices = [nums.length];
    
    // initialize indices array to [0,1,2,3,...].
    for (i = 0; i < nums.length; ++i) {
        indices[i] = i;
    }
    
    // sort indices base on their values.
    indices = indices.sort(function(a, b) {
        return nums[a] - nums[b];
    });
    
    // loop through the indices array.
    var i, j;
    for (i = 0; i < nums.length - 1; ++i) {
        var x = indices[i];
        
        for (j = i + 1; j < nums.length; ++j) {
            var y = indices[j];
            var diff = nums[y] - nums[x];
            var di = y > x ? y - x : x - y;
            
            // stop if the difference exceeds t.
            if (diff > t) break;
            
            if (di <= k) return true;
        }
    }
    
    return false;
};
```
