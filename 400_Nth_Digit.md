# 400. Nth Digit

---

## Description

Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

Note:
n is positive and will fit within the range of a 32-bit signed integer (n < 2^31).


```
Example 1:

Input:
3

Output:
3

Example 2:

Input:
11

Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
```

## Python

```python
class Solution(object):
    def findNthDigit(self, n):
        """
        :type n: int
        :rtype: int
        """
        step = 1
        r = 9
        base = 0
        while n > r * step:
            base += r * step
            r *= 10
            step += 1            
        n -= base
        index = n % step
        n = r / 9 - 1 + n / step
        if index == 0:
            return n % 10
        else:
            n += 1
            n = str(n)
            n = n[index - 1]
            return int(n)
```
