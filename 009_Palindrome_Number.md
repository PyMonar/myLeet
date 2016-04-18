# 9. Palindrome Number

---

## Description

> Determine whether an integer is a palindrome. Do this without extra space.

## Javascript

### Method 1
```
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('') - 0 === x;
};
```


### Method 2

> 思路：将数字转化成字符串处理。

```
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    var numStr = x + '';
    var l = numStr.length;
    var index = l % 2 === 0 ? l / 2 : (l + 1) / 2;
    for (var i = 0; i < index; i++) {
        if (numStr[i] !== numStr[l - i - 1]) {
            return false;
        }
    }
    return true;
};
```
