# 301. Remove Invalid Parentheses

---

## Description

> Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.
> Note: The input string may contain letters other than the parentheses ( and ).

> Examples:
```
"()())()" -> ["()()()", "(())()"]
"(a)())()" -> ["(a)()()", "(a())()"]
")(" -> [""]

```

## Javascript

```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    var dic = {};
    var q = [];
    var result = [];
    q.push(s);
    var find;
    
    while (q.length !== 0) {
        var cur = q.shift();

        if (isValid(cur)) {
            result.push(cur);
            find = true;
        }
        if (find) continue;

        var curLength = cur.length;
        for (var i = 0; i < curLength; i++) {
            if (cur[i] === ')' || cur[i] === '(') {
                var sliced = cur.slice(0, i) + cur.slice(i + 1); 
                if (!dic[sliced]) {
                    q.push(sliced);
                    dic[sliced] = 1;
                }
            }
        }
    }

    return result;
};

var isValid = function (s) {
    var l = s.length;
    var count = 0;
    for (var i = 0 ; i < l; i++) {
        if (s[i] === '(') {
            count++;
        }
        if (s[i] === ')') {
            count--;
        }
        if (count < 0) {
            return false;
        }
    }
    return count === 0;
};
```
