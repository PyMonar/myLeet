# 198. House Robber

---

## Description

> You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

> Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

## Javascript

> 思路：动态规划。设置一个数组money存放偷到某一家的时候已经偷得的最大钱数，然后不能偷相邻两家的，列出状态转移方程即可。

```javascript
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

## Java

解法一：

```java
public class Solution {
    public int rob(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        int res = 0;
        int[] dp = new int[nums.length];
        for (int i = 0; i < dp.length; i++) {
            dp[i] = nums[i];
            res = res > dp[i] ? res : dp[i];
            for (int j = 0; j < i - 1; j++) {
                dp[i] = nums[i] + dp[j] > dp[i] ? nums[i] + dp[j] : dp[i];
                res = res > dp[i] ? res : dp[i];
            }
        }
        return res;
    }
}
```

解法二：

```java
public int rob(int[] num) {
    int rob = 0; //max monney can get if rob current house
    int notrob = 0; //max money can get if not rob current house
    for(int i=0; i<num.length; i++) {
        int currob = notrob + num[i]; //if rob current value, previous house must not be robbed
        notrob = Math.max(notrob, rob); //if not rob ith house, take the max value of robbed (i-1)th house and not rob (i-1)th house
        rob = currob;
    }
    return Math.max(rob, notrob);
}
```