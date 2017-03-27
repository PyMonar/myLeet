# 169. Majority Element

---

## Description

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

## Python

```python
class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        dic = {}
        times = len(nums) / 2
        for num in nums:
            if num in dic:
                dic[num] += 1
            else:
                dic[num] = 1
            if dic[num] > times:
                return num
```

## Java

Moore voting algorithm

```java
public int majorityElement(int[] nums) {
    int count = 0, ret = 0;
    for (int num: nums) {
        if (count == 0) {
            ret = num;
        }
        if (num != ret) {
            count--;
        }
        else {
            count++;
        }
    }
    return ret;
}
```