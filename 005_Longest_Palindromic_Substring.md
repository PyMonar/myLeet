# 5. Longest Palindromic Substring

---

## Description

> Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.


## Javascript

```
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    s = '#' + s.split('').join('#') + '#';
    var i, l = s.length;
    var p = [];
    for (i = 0; i < l; i++) {
        p.push(0);
    }

    var C = 0, R = 0;
    var pre, after;
    for (i = 1; i < l - 1; i++) {
        if (i > R) {
            C = i;
            pre = i, after = i;
            while(s[--pre] === s[++after] && after < l && pre >= 0) {
                p[i]++;
            }
            R = i + p[i];
        } else {
            // 两种情况
            var i_mirror = C - (i - C);
            var mirrorValue = p[i_mirror];
            // 镜像在范围内
            if (mirrorValue < R - i) {
                p[i] = mirrorValue;
            } else { // 镜像超出范围
                C = i;
                p[i] = R - i;
                after = R, pre = i - (R - i);
                while(s[--pre] === s[++after] && after < l && pre >= 0) {
                    p[i]++;
                }
                R = i + p[i];
            }
        }
    }

    var max = 1, index;
    for (i = 0; i < l; i++) {
        if (p[i] >= max) {
            index = i;
            max = p[i];
        }
    }

    return s.slice(index - p[index], index + p[index]).split('#').join('');
};
```
