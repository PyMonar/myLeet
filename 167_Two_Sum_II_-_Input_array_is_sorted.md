# 167. Two Sum II - Input array is sorted

---

## Description

> Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

> The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

> You may assume that each input would have exactly one solution.

```
Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
```

## Python

```python
class Solution(object):
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        l = len(numbers)
        for i in range(l):
            index2 = self.binary_search(numbers, i + 1, l - 1, target - numbers[i])
            if index2 != -1:
                result = [i + 1]
                result.append(index2 + 1)
                return result
        
        
    def binary_search(self, nums, i, j, target):
        while i <= j:
            mid = (i + j) / 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                j = mid - 1
            else:
                i = mid + 1
        return -1
```
