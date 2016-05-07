# 22. Generate Parentheses

---

## Description

> Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

> For example, given n = 3, a solution set is:

> "((()))", "(()())", "(())()", "()(())", "()()()"

## Javascript

> 思路：回溯法。

```
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
     var result = [];
     build(result, '', 0, 0, n);
     return result;
};

var build = function (result, str, left, right, n) {
    if (left === n && right === n) {
        result.push(str);
        return;
    }
    if ( left > right ) {
        if (left < n) {
            build(result, str + '(', left + 1, right, n);
        }

        build(result, str + ')', left, right + 1, n);
    } else if (left === right){
        build(result, str + '(', left + 1, right, n);
    }
};
```
