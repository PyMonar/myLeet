# 20. Valid Parentheses

---

## Description

> Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

> The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

## Javascript

> 思路：括号匹配，用栈解决。

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) {
        return true;
    }

    var stack = [];
    var l = s.length;
    stack.push(s[0]);
    for(var i = 1; i < l; i++) {
        if(isBrackets(s[i]) !== -1) {
            if (isPair(s[i], stack[stack.length - 1])) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }

    return stack.length === 0;

};

// 判断是否为括号
var isBrackets = function (c) {
    var brackets = ['(',')','[',']','{','}'];
    return brackets.indexOf(c);
}
// 判断是否与栈顶元素匹配
var isPair = function (cur, pre) {
    if (cur === ')' && pre === '(') {
        return true;
    } else if (cur === ']' && pre === '[') {
        return true;
    } else if(cur === '}' && pre === '{') {
        return true;
    } else {
        return false;
    }
}
```

## Python

```python
class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if s == None or len(s) == 0:
            return True
        stack = ['#']
        for i in range(0, len(s)):
            if (s[i] == ')' and stack[-1] == '(') or (s[i] == ']' and stack[-1] == '[') or (s[i] == '}' and stack[-1] == '{'):
                stack.pop()
            else:
                stack.append(s[i])
        return len(stack) == 1
        
```