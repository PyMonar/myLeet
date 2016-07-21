# 151. Reverse Words in a String

---

## Description

> Given an input string, reverse the string word by word.

> For example,

> Given s = "the sky is blue",

> return "blue is sky the".


## Javascript

```javascript
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.trim().split(/\s+/).reverse().join(' ');
};
```
