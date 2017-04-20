# 507. Perfect Number

---

## Description

> We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

```
Example:

Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
```

## Python

```python
class Solution(object):
    def checkPerfectNumber(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num <= 0: 
            return False
        sum = 0
        collect = set()
        for i in range(1, int(num ** 0.5 + 1)):
            if num % i == 0:
                collect.add(i)
                collect.add(num / i)
        for n in collect:
            sum += n
        sum -= num
        return sum == num
```