# 70. Climbing Stairs

---
## Description

> You are climbing a stair case. It takes n steps to reach to the top.

> Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

## Javascript

> 思路：设到达台阶n有f(n)种走法，那么到达台阶n有两种情况，第一种从n-1台阶上来，第二种从n-2台阶上来，所以可以得出公式：

> f(n) = f(n-1) + f(n-2),其中 f(1) = 1, f(2) = 2

> 可以用递归，但是开数组直接相加更快。

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var methods = [];
    
    methods[1] = 1;
    methods[2] = 2;
    
    for (var i = 3; i <= n; i++) {
        methods[i] = methods[i-1] + methods[i-2];
    }
    
    return methods[n];
};

```

## Java

解法二：非数组方法。

```java
public int climbStairs(int n) {
    // base cases
    if(n <= 0) return 0;
    if(n == 1) return 1;
    if(n == 2) return 2;
    
    int one_step_before = 2;
    int two_steps_before = 1;
    int all_ways = 0;
    
    for(int i=2; i<n; i++){
    	all_ways = one_step_before + two_steps_before;
    	two_steps_before = one_step_before;
        one_step_before = all_ways;
    }
    return all_ways;
}
```