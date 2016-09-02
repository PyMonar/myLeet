# 32. Longest Valid Parentheses

---

## Description

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.


## Python

```python
class Solution(object):
    def longestValidParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """
        if len(s) <= 1:
            return 0
        stack = [0]
        for i in range(1, len(s)):
            if s[i] == '(':
                stack.append(i)
            else:
                if len(stack) == 0 or s[stack[-1]] == ')':
                    stack.append(i)
                else:
                    stack.pop()
        stack.append(len(s))
        stack.insert(0, -1)
        result = 0
        for i in range(1, len(stack)):
            l = stack[i] - stack[i - 1] - 1
            result = result if l < result else l
        return result
```
