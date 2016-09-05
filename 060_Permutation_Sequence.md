# 60. Permutation Sequence

---

## Description

The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

1. "123"
2. "132"
3. "213"
4. "231"
5. "312"
6. "321"

Given n and k, return the kth permutation sequence.


## Python

```python
class Solution(object):
    def getPermutation(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
        result = ''
        origin = [i for i in range(1, n + 1)]
        steps = [1]
        for i in range(1, 10):
            steps.append(i * steps[i - 1])
        
        while n > 2:
            item = origin[(k + steps[n - 1] - 1) / steps[n - 1] - 1]
            result +=  str(item)
            origin.remove(item)
            k = k % steps[n - 1]
            n -= 1
            
        if k != 1:
            origin.reverse()
        
        result += ''.join(str(s) for s in origin)
        return result
```
