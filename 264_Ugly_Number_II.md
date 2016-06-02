# 264. Ugly Number II

---

## Description

> Write a program to find the n-th ugly number.

> Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

> Note that 1 is typically treated as an ugly number.

## Javascript


```
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var result = [];
    result.push(1);
    var p2 = 0, p3 = 0, p5 = 0;

    while (result.length < n) {
        var temp = min(result[p2] * 2, result[p3] * 3, result[p5] * 5);
        if (temp === result[p2] * 2) {
            p2 ++;
        }

        if (temp === result[p3] * 3) {
            p3 ++;
        }

        if (temp === result[p5] * 5) {
            p5 ++;
        }

        result.push(temp);
    }

    return result[n - 1];
};

var min = function (a, b, c) {
    if (a > b) {
        return b > c ? c : b;
    } else {
        return a > c ? c : a;
    }
};
```
