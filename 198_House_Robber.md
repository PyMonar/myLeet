# 198. House Robber

---

## Description

> You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

> Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

## Javascript

> 思路：动态规划。设置一个数组money存放偷到某一家的时候已经偷得的最大钱数，然后不能偷相邻两家的，列出状态转移方程即可。

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var money = [];
    var max = 0;
    var l = nums.length;
    for (var i = 0; i < l; i++) {
        money[i] = nums[i];
    }

    var cache;
    for (var m = 0; m < l; m++) {
        cache = 0;
        for (var n = 0; n < m - 1; n++) {
            cache = cache > money[n] ? cache : money[n];
        }

        money[m] += cache;
    }


    for (var j = 0; j < l; j++) {
        if (money[j] >= max) {
            max = money[j];
        }
    }

    return max;
};
```
