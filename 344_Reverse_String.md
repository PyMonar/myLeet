# 344. Reverse String

---

## Description

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".



## Javascript

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split('').reverse().join('');
};
```

## Python
```python
class Solution(object):
    def reverseString(self, s):
        return s[::-1]

# or

class Solution(object):
    def reverseString(self, s):
        """
        :type s: str
        :rtype: str
        """
        arr = [x for x in s]
        i = 0
        j = len(s) - 1
        while i < j:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
            j -= 1
        return "".join(arr)
```