# 89. Gray Code

---

## Description

> The gray code is a binary numeral system where two successive values differ in only one bit.

> Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

> For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:

```
00 - 0
01 - 1
11 - 3
10 - 2
```

## Javascript


```
/**
 * @param {number} n
 * @return {number[]}
 */
var result, cur;
var grayCode = function(n) {
    result = [];
    cur = 0;
    generate(n - 1);
    return result;
};

var generate = function (n) {
    if (n < 0) {
        result.push(cur);
        return;
    }

    generate(n - 1);
    cur = (1 << n) ^ cur;
    generate(n - 1);
};

```
