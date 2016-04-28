# 7. Reverse Integer

---

## Description

> Reverse digits of an integer.

> Example1: x = 123, return 321
> Example2: x = -123, return -321

## Javascript

> 思路：注意结果别溢出。

```
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    var s = x + '';
    var result;
    if (x < 0) {
        result = '-' + s.slice(1).split('').reverse().join('') - 0;

    } else {
        result =  s.split('').reverse().join('') - 0;
    }

    if (result > 2147483647 || result < -2147483648) {
        return 0;
    }
    else{
        return result;
    }
};
```
