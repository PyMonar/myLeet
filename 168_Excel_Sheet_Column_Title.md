# 168. Excel Sheet Column Title

---

## Description

> Given a positive integer, return its corresponding column title as appear in an Excel sheet.

```
  1 -> A
  2 -> B
  3 -> C
  ...
  26 -> Z
  27 -> AA
  28 -> AB
```
## Javascript

> 思路：由于是从1开始计数没有0所以在循环一开始要造0，所以n-=1。

```
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = [];
    var char;

    while (n) {
        n -= 1;
        result.push(String.fromCharCode(n % 26 + 65));
        n = (n - n % 26) / 26;
    }

    return result.reverse().join('');
};
```
