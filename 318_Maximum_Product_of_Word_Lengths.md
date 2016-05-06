# 318. Maximum Product of Word Lengths

---

## Description

> Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

> Example 1:
> Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
> Return 16
> The two words can be "abcw", "xtfn".

> Example 2:
> Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
> Return 4
> The two words can be "ab", "cd".

> Example 3:
> Given ["a", "aa", "aaa", "aaaa"]
> Return 0
> No such pair of words.

## Javascript

> 思路：利用长度为26的二进制数组，将出现过的字符表示为1，未出现过为undefined。然后两两将单词二进制数组各个位进行&运算来确定是否出现重复，因为只有&运算结果为1的情况出现重复。


```
/**
 * @param {string[]} words
 * @return {number}
 */

var maxProduct = function(words) {
    var max = 0;
    var bits = [];
    var i, j, l, m;
    for (i = 0, l = words.length; i < l; i++) {
        bits[i] = [];
        for (j = 0, m = words[i].length; j < m; j++) {
            var cur = words[i][j].charCodeAt() - 97;
            bits[i][cur] = 1;
        }
    }

    for (i = 0, l = words.length; i < l -1; i++) {
        for (j = i + 1; j < l; j++) {
            if(!hasSame(bits[i], bits[j])) {
                var len = words[i].length * words[j].length;
                max = max < len ? len : max;
            }
        }
    }
    return max;
};

var hasSame  = function (a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] & b[i] === 1) {
            return true;
        }
    }
    return false;
};
```
