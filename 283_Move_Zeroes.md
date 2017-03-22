# 283. Move Zeroes

---

## Description

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].


## Python

```python
class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        i, j = 0, 0
        while j < len(nums):
            if nums[j] != 0:
                if j == i:
                    i += 1
                else:
                    nums[i] = nums[j]
                    nums[j] = 0
                    i += 1
            j += 1  
```

## Java

```java
public class Solution {
    public void moveZeroes(int[] nums) {
		if (nums == null || nums.length == 0) {
			return;
		}
		int i = 0, j = 0;
		while (j < nums.length) {
			if (nums[j] != 0) {
				nums[i] = nums[j];
				i++;
			}
			j++;
		}
		for (int k = i; k < nums.length; k++) {
			nums[k] = 0;
		}
	}
}
```
