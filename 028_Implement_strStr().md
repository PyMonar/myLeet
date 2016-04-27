# 28. Implement strStr()

---

## Description

> Implement strStr().

> Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

## Javascript

```
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0;
    }
    var l = haystack.length;
    var ln = needle.length;
    for (var i = 0; i <= l - ln; i++) {
        for (var j = 0; j < ln; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === ln) {
            return i;
        }
    }

    return -1;
};
```
