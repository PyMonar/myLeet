# 136. Single Number

---

## Description

> Given an array of integers, every element appears twice except for one. Find that single one.

## Javascript


```
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     var dic = {};
     for (var i = 0; i < nums.length; i++) {
         if (dic[nums[i]]) {
             dic[nums[i]]++;
         } else {
             dic[nums[i]] = 1;
         }
     }

     for (var key in dic) {
         if (dic[key] === 1) {
             return key - 0;
         }
     }
};
```
