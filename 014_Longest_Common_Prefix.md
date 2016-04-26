# 14. Longest Common Prefix

---

## Description

> Write a function to find the longest common prefix string amongst an array of strings.


## Javascript

```
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var l = strs.length;
    if (l === 0) {
        return '';
    }

    if (l === 1) {
        return strs[0];
    }
    var prefix = getPrefix(strs[0], strs[1]), fix;
    for (var i = 0; i < l - 1; i++) {
        fix = getPrefix(strs[i], strs[i+1]);
        if ( fix === '') {
            return '';
        }
        if (prefix.length > fix.length) {
            prefix = fix;
        }
    }
    return prefix;
};

var getPrefix = function (str1, str2) {
    var l1 = str1.length;
    var l2 = str2.length;

    var i = 0, j = 0;
    var fix = '';
    while(i < l1 && j < l2) {
        if (str1[i] === str2[j]) {
            fix += str1[i];
            i++;
            j++;
        } else {
            break;
        }
    }

    return fix;
}
```
