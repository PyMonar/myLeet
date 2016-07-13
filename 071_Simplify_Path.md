# 71. Simplify Path

---

## Description

> Given an absolute path for a file (Unix-style), simplify it.

> For example,

> path = "/home/", => "/home"

> path = "/a/./b/../../c/", => "/c"


## Javascript

```javascript
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var stack = [];
    path = path.split('/');
    var l = path.length,
        i;
    for (i = 0; i < l; i ++) {
        if (path[i]) {
            stack.push('/');
            if (path[i] === '.') {
                stack.pop();
                continue;
            } else if (path[i] === '..') {
                stack.pop();
                stack.pop();
                stack.pop();
            } else {
                stack.push(path[i]);
            }
        }
    }

    if(stack.length === 0) {
        stack.push('/');
    }

    return stack.join('');
};
```
