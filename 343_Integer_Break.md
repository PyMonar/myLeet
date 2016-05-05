# 343. Integer Break

---

## Description

> Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

> For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

## Javascript

> 思路：尽量分解为3来相乘，别问我为什么知道，我试出来的。

```
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {

      if ( n === 2) {
          return 1;
      }

      if ( n === 3) {
          return 2;
      }

      var i = [];
      while (n > 3) {
          n -= 3;
          i.push(3);
      }

      if ( n === 3 || n === 2) {
          i.push(n);
      }

      if ( n === 1 ) {
          i[i.length - 1] += n;
      }

      var result = 1;
      for (var j = 0; j < i.length; j++) {
          result *= i[j];
      }

      return result;
  };

```
