# 263. Ugly Number

---

## Description

> Write a program to check whether a given number is an ugly number.

> Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

> Note that 1 is typically treated as an ugly number.

## Javascript

> 思路：将数字分别%运算2、3或5，如果结果为0则相除后继续这样操作，直到都无法为0，这时如果结果为1则为ugly number，否则不是。

```javascript
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num <= 0) {
        return false;
    }
    var flag = true;
    while (num !== 1 && flag) {
        if (num % 2 === 0) {
            num /= 2;
            continue;
        } else if (num % 3 === 0) {
            num /= 3;
            continue;
        } else if (num % 5 === 0) {
            num /= 5;
            continue;
        } else {
            flag = false;
        }
    }
    return flag;
};
```

## Java

解法二：递归。

```java
public class Solution {
    public boolean isUgly(int num) {
        if (num <= 0) return false;
        if (num == 1 || num == 2 || num == 3 || num == 5) return true;
        if (num % 2 == 0) return isUgly(num / 2);
        if (num % 3 == 0) return isUgly(num / 3);
        if (num % 5 == 0) return isUgly(num / 5);
        return false;
    }
}
```