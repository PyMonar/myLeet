# 229. Majority Element II

---

## Description

> Given an integer array of size n, find all elements that appear more than `⌊ n/3 ⌋` times. The algorithm should run in linear time and in O(1) space.


## Javascript

```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var times = Math.floor(nums.length / 3);
    var result = [];
    var dic = {};
    for (var i = 0; i < nums.length; i++) {
        if (dic[nums[i]]) {
            dic[nums[i]]++;
        } else {
            dic[nums[i]] = 1;
        }
    }

    for (var key in dic) {
        if (dic[key] > times) {
            result.push(key - 0);
        }
    }
    return result;
};
```
