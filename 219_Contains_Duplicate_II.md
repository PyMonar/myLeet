# 219. Contains Duplicate II

---

## Description

> Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.

## Javascript

> 思路：利用字典解决。

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var dic = {};
    var l = nums.length;
    var temp, flag = false,
        step;
    for (var i = 0; i < l; i++) {
        if (dic[nums[i]] === undefined) {
            dic[nums[i]] = [];
            dic[nums[i]].push(i);
        } else {
            temp = dic[nums[i]];
            temp.forEach(function(item, index, array) {
                step = item - i > 0 ? item - i : i - item;
                if (step <= k) {
                    flag = true;
                }
            });
            dic[nums[i]].push(i);
        }
    }

    return flag;
};
```
