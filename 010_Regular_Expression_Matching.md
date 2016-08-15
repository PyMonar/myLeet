# 10. Regular Expression Matching

---

## Description

> Implement regular expression matching with support for '.' and '*'.

```
'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
```


## Javascript

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var ls = s.length;
    var lp = p.length;

    var dp = [], i, j;
    for (i = 0; i <= ls; i++) {
        dp.push([]);
        for (j = 0; j <= lp; j++) {
            dp[i][j] = false;
        }
    }
    dp[0][0] = true;
    
    for (i = 0; i <= ls; i++) {
        for (j = 1; j <= lp; j++) {
            if(p[j - 1] === '.') {
                dp[i][j] = i === 0 ? false : dp[i - 1][j - 1];
            } else if (p[j - 1] === '*'){
                if (i === 0 || p[j - 2] !== '.' && p[j - 2] !== s[i - 1]) {
                    dp[i][j] = dp[i][j - 2];
                } else {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                }
            } else {
                if (i === 0 || p[j - 1] !== s[i - 1]) {
                    dp[i][j] = false;
                } else {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
    }

    return dp[ls][lp];
};
```