# 76. Minimum Window Substring

---

## Description

> Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

```
For example,
S = "ADOBECODEBANC"
T = "ABC"
```

> Minimum window is "BANC".

## Python

```python
class Solution:
    # @param {string} s
    # @param {string} t
    # @return {string}
    def minWindow(self, s, t):
        char_dict = {}
        for c in t:
            char_dict.setdefault(c, 0)
            char_dict[c] += 1
        begin_i = 0
        end_i = 0
        result = (-1, -1)
        while end_i < len(s):
            if s[end_i] in char_dict:
                char_dict[s[end_i]] -= 1
                if self.check_dict(char_dict):
                    while begin_i <= end_i:
                        if s[begin_i] in char_dict:
                            if char_dict[s[begin_i]] == 0:
                                break
                            char_dict[s[begin_i]] += 1
                        begin_i += 1
                    if result == (-1, -1) or result[1] - result[0] > end_i - begin_i:
                        result = (begin_i, end_i)
                    char_dict[s[begin_i]] += 1
                    begin_i += 1
            end_i += 1
        if result == (-1, -1):
            return ''
        return s[result[0]: result[1] + 1]

    def check_dict(self, char_dict):
        for c in char_dict:
            if char_dict[c] > 0:
                return False
        return True
```
