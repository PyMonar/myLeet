# 91. Decode Ways

---

## Description

> A message containing letters from A-Z is being encoded to numbers using the following mapping:

```
'A' -> 1
'B' -> 2
...
'Z' -> 26
```

> Given an encoded message containing digits, determine the total number of ways to decode it.

> For example,

> Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

> The number of ways decoding "12" is 2.


## Javascript

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length === 0 || s.startsWith('0')) {
        return 0;
    }
    
    var result = [];
    var i;
    
    // 预处理
    s = s.split('');
    for (i = 1; i < s.length; i++) {
        if (s[i] === '0') {
            if (s[i - 1] === 'X' || (s[i - 1] - 0 > 2)) {
                return 0;
            } else {
                s.splice(i - 1, 2, 'X');
                i--;
            }
        }
    }
    
    result.push(1);
    
    for (i = 1; i < s.length; i++) {
        if (s[i - 1] === 'X' || s[i] === 'X') {
            result[i] = result[i - 1];
            continue;
        }
        
        var num = (s[i - 1] + s[i]) - 0;
        if (num <= 26) {
            result[i] = result[i - 1] + (result[i - 2] === undefined ? 1 : result[i - 2]);
        } else {
            result[i] = result[i - 1];
        }
    }

    return result[s.length - 1];
};
```
