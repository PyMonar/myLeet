# 172. Factorial Trailing Zeroes

---

## Description

> Given an integer n, return the number of trailing zeroes in n!.

## Javascript

> 思路：主要是找里边5因子的数目。
```
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var result = 0;
    while (n) {
        result += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    return result;
}
```
