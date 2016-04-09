# 263. Ugly Number

---

## Description

> Write a program to check whether a given number is an ugly number.

> Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

> Note that 1 is typically treated as an ugly number.

## Javascript

> ˼·�������ֱַ�%����2��3��5��������Ϊ0��������������������ֱ�����޷�Ϊ0����ʱ������Ϊ1��Ϊugly number�������ǡ�

```
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