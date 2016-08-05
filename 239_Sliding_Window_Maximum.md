# 239. Sliding Window Maximum

---

## Description

> Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

> For example,

> Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

```
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

> Therefore, return the max sliding window as [3,3,5,5,6,7].

> Note: 
> You may assume k is always valid, ie: 1 &#x2264; k &#x2264; input array&apos;s size for non-empty array.


## Javascript

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0) {
        return [];
    }
    
    var i;
    var result = [];
    var l = nums.length;
    var left = 0, right = k - 1;
    var max = nums[0];
    var index = 0;
    for (i = 0; i < k; i++) {
        if (nums[i] >= max) {
            max = nums[i];
            index = i;
        }
    }
    result.push(max);
    left++;
    right++;

    while (right < l) {
        if (nums[right] >= max) {
            max = nums[right];
            index = right;
        } else {
            if (index < left) {
                // 重新计算max
                max = nums[left];
                index = left;
                for (i = left; i <= right; i++) {
                    if (nums[i] >= max) {
                        max = nums[i];
                        index = i;
                    }
                }
            } 
        }
        result.push(max);
        left++;
        right++;
    }
    
    return result; 
};
```