# 17. Letter Combinations of a Phone Number

---

## Description

> Given a digit string, return all possible letter combinations that the number could represent.
> A mapping of digit to letters (just like on the telephone buttons) is given below.
> Input:Digit string "23"
> Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

## Javascript


```
/**
 * @param {string} digits
 * @return {string[]}
 */

var result;
var letterCombinations = function(digits) {
    var l = digits.length;
    if (l === 0 || digits.indexOf('0') !== -1) {
        return [];
    }
    result = [];
    solution(digits, 0, l - 1, []);
    return result;
};

var solution = function (digits, start, end, str) {
    if (start > end) {
        result.push(str.join(''));
    } else {
        var collect = getcollect(digits[start]);
        var l = collect.length;
        var temp;
        for (var i = 0; i < l; i++) {
            temp = str.slice();
            temp.push(collect[i]);
            solution(digits, start + 1, end, temp);
        }
    }
};

var getcollect = function (n) {
    switch(n) {
        case '1':
            return '*';
        case '2':
            return 'abc';
        case '3':
            return 'def';
        case '4':
            return 'ghi';
        case '5':
            return 'jkl';
        case '6':
            return 'mno';
        case '7':
            return 'pqrs';
        case '8':
            return 'tuv';
        case '9':
            return 'wxyz';
        default:
            return '';
    }
};
```
