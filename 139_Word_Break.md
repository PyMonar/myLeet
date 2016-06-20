# 139. Word Break

---

## Description

> Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

> For example, given
> s = "leetcode",
> dict = ["leet", "code"].

> Return true because "leetcode" can be segmented as "leet code".


## Javascript

> 思路：动态规划！

```
/**
* @param {string} s
* @param {set<string>} wordDict
*   Note: wordDict is a Set object, see:
*   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
* @return {boolean}
*/
var wordBreak = function(s, wordDict) {
    if (s.length === 0) {
        return false;
    }

    var result = [];
    var i, j, temp;
    for (i = 0; i < s.length; i++) {
        result.push(false);
    }

    for (i = 0; i < s.length; i++) {
        var cur = s.slice(0, i + 1);
        if (wordDict.has(cur)) {
            result[i] = true;
            continue;
        }
        for (j = 0; j < i; j++) {
            if (result[j]) {
                temp = s.slice(j + 1, i + 1);
                if (wordDict.has(temp)) {
                    result[i] = true;
                    break;
                }
            }         
        }
    }
    return result[result.length - 1];
};
```
