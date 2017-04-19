# 8. String to Integer (atoi)

---

## Description

> Implement atoi to convert a string to an integer.

## Javascript

> 思路：注意溢出处理。

```javascript
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var result = parseInt(str);
    if (isNaN(result)) {
        return 0;
    }

    if (result >= 2147483648) {
        result = 2147483647;
    }

    if (result <= -2147483648) {
        result = -2147483648;
    }

    return result;
};
```
