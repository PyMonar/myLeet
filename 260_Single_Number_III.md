# 260. Single Number III

---

## Description

> Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

> For example:

> Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

## Javascript


```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var dic = {}, result = [], cur;
    for (var i = 0; i < nums.length; i++) {
        cur = dic[nums[i]];
        if (cur) {
            dic[nums[i]]++;
        } else {
            dic[nums[i]] = 1;
        }
    }

    for (var key in dic) {
        if (dic[key]  === 1) {
            result.push(key - 0);
        }
    }

    return result;
};
```
