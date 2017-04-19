# 205. Isomorphic Strings

---

## Description

> Given two strings s and t, determine if they are isomorphic.

> Two strings are isomorphic if the characters in s can be replaced to get t.

> All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

> For example,
> Given "egg", "add", return true.
> Given "foo", "bar", return false.
>Given "paper", "title", return true.

## Javascript

> 思路：利用字典，先选择一个字符串存储每一个字符出现的位置，针对出现大于等于两次的字符记录下标，然后在另一个字符中验证这些下标是否相等。注意，本算法需要反过来再一次验证，然后合并结果。

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var ls = s.length;
    var lt = t.length;
    if (ls === '' || lt === '') {
        return true;
    }
    var flag1 = true,
        flag2 = true;
    var temp, tempLength, cur, key;
    var dic = {};


    for (var i = 0; i < ls; i++) {
        if (dic[s[i]] === undefined) {
            dic[s[i]] = [];
            dic[s[i]].push(i);
        } else {
            dic[s[i]].push(i);
        }
    }

    for (key in dic) {
        temp = dic[key];
        tempLength = temp.length;
        if (tempLength > 1) {
            cur = t[temp[0]];
            for (var j = 0; j < tempLength; j++) {
                if (t[temp[j]] !== undefined && t[temp[j]] !== cur) {
                    flag1 = false;
                }
            }
        }
    }

    dic = {};
    for (var i = 0; i < lt; i++) {
        if (dic[t[i]] === undefined) {
            dic[t[i]] = [];
            dic[t[i]].push(i);
        } else {
            dic[t[i]].push(i);
        }
    }

    for (key in dic) {
        temp = dic[key];
        tempLength = temp.length;
        if (tempLength > 1) {
            cur = s[temp[0]];
            for (var j = 0; j < tempLength; j++) {
                if (s[temp[j]] !== undefined && s[temp[j]] !== cur) {
                    flag2 = false;
                }
            }
        }
    }

    return flag1 && flag2;
};
```

## Python

```python
class Solution(object):
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        dic = {}
        for i in range(len(s)):
            if s[i] not in dic:
                dic[s[i]] = ord(s[i]) - ord(t[i])
            else:
                if dic[s[i]] != ord(s[i]) - ord(t[i]):
                    return False
        dic.clear()
        for i in range(len(t)):
            if t[i] not in dic:
                dic[t[i]] = ord(s[i]) - ord(t[i])
            else:
                if dic[t[i]] != ord(s[i]) - ord(t[i]):
                    return False
        return True
```