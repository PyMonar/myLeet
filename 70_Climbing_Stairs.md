# 70. Climbing Stairs

---
## Description

> You are climbing a stair case. It takes n steps to reach to the top.

> Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

## Javascript

> ˼·���赽��̨��n��f(n)���߷�����ô����̨��n�������������һ�ִ�n-1̨���������ڶ��ִ�n-2̨�����������Կ��Եó���ʽ��

> f(n) = f(n-1) + f(n-2),���� f(1) = 1, f(2) = 2

> �����õݹ飬���ǿ�����ֱ����Ӹ��졣

```
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