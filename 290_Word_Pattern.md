# 290. Word Pattern

---

## Description

> Given a pattern and a string str, find if str follows the same pattern.

> Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

> Examples:
> pattern = "abba", str = "dog cat cat dog" should return true.
> pattern = "abba", str = "dog cat cat fish" should return false.
> pattern = "aaaa", str = "dog cat cat dog" should return false.
> pattern = "abba", str = "dog dog dog dog" should return false.
> Notes:
> You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

## Javascript

> 思路：利用字典来处理，建立模式字典，将模式里边每一个字符和出现下标录入，然后去str里边验证下标。注意，相邻模式字符不同的，对应的str中的单词应该不一致。

```
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    if (pattern === '' || str === '') {
        return false;
    }

    var arr = str.split(' ');
    var dic = {};
    var lp = pattern.length;
    if (lp !== arr.length) {
        return false;
    }

    for (var i = 0; i < lp; i++) {
        if (dic[pattern[i]] === undefined) {
            dic[pattern[i]] = [];
            dic[pattern[i]].push(i);
        } else {
            dic[pattern[i]].push(i);
        }
    }
    var flag = true;

    for (var key in dic) {
        var subs = dic[key];
        var ls = subs.length;
        var temp = '';
        for (var k = 0; k < ls; k++) {
            if (temp === '') {
                temp = arr[subs[k]];
            } else {
                if (temp !== arr[subs[k]]) {
                    return false;
                }
            }
        }
    }

    for (var m = 0; m < lp - 1; m++) {
        if (pattern[m] !== pattern[m + 1] && arr[m] === arr[m + 1]) {
            return false;
        }
    }

    return flag;
};
```
