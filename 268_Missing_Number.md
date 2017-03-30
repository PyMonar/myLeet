# 268. Missing Number

---

## Description

> Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

> For example,
> Given nums = [0, 1, 3] return 2.

## Javascript

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var dic = {};
    for (var i = 0, l = nums.length; i < l; i++) {
        dic[nums[i]] = 1;
    }

    for (i = 0, l = nums.length; i < l ; i++ ) {
        if (dic[i] === undefined) {
            return i;
        }
    }
    return nums.length;
};
```

## Java

解法二：数学法，计算1-n的和，然后减去数组所有数字的和，就是缺少的数字。

```java
public class Solution {
    public int missingNumber(int[] nums) {
        int sum = 0, n = nums.length;
        for (int num : nums) {
            sum += num;
        }
        return (n + 1) * n / 2 - sum;
    }
}
```

解法三：异或运算法。

```java
public int missingNumber(int[] nums) { //xor
    int res = nums.length;
    for(int i=0; i < nums.length; i++){
        res ^= i;
        res ^= nums[i];
    }
    return res;
}
```