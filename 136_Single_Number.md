# 136. Single Number

---

## Description

> Given an array of integers, every element appears twice except for one. Find that single one.

## Solution

1. 哈希记录每个数出现的次数，然后返回次数为1的数字
2. 位运算，利用异或
```
1 ^ 1 = 0
0 ^ 0 = 0
1 ^ 0 = 1
```
如果两个相同的数相异或则为0，所以将给定数组的所有数字进行异或运算，次数出现两次的都为0了，0和最后单个的数字异或得出结果。

## Javascript

```javascript
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
## Python

```python
class Solution(object):
    def singleNumber(self, nums):
        result = 0
        for num in nums:
            result ^= num
        return result

#or

class Solution(object):
    def singleNumber(self, nums):
        dic = {}
        for num in nums:
            if num in dic:
                dic[num] += 1
            else:
                dic[num] = 1
        for num in dic:
            if dic[num] == 1:
                return num
```
