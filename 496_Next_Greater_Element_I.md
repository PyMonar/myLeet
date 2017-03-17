# 496. Next Greater Element I
          
---

## Description

> You are given two arrays (without duplicates) nums1 and nums2 where nums1&#x2019;s elements are subset of nums2. Find all the next greater numbers for nums1&apos;s elements in the corresponding places of nums2.
> The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

```
Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.

```


```
Example 2:

Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.

```


```
Note:

All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.

```


## Java

解法一：字典法(7ms)

```java
import java.util.HashMap;

public class Solution {
	public int[] nextGreaterElement(int[] findNums, int[] nums) {
		int[] result = new int[findNums.length];
		HashMap<Integer, Integer> dic = new HashMap<Integer, Integer>();
		for (int i = 0; i < nums.length; i++) {
			dic.put(nums[i], i);
		}
		int start;
		for(int i = 0; i < findNums.length; i++) {
			start = dic.get(findNums[i]);
			if (start == nums.length - 1) {
				result[i] = -1;
				continue;
			}
			for(int j = start + 1; j < nums.length; j++) {
				if (nums[j] > findNums[i]) {
					result[i] = nums[j];
					break;
				}
				result[i] = -1;
			}
		}
        return result;
    }
}
```

解法二：栈法(11ms)

```java
import java.util.HashMap;

public class Solution {
	public int[] nextGreaterElement(int[] findNums, int[] nums) {
		Stack<Integer> stack = new Stack<Integer>();
		HashMap<Integer, Integer> dic = new HashMap<Integer, Integer>();
		int[] result = new int[findNums.length];
		
		for (int num : nums) {
			while(!stack.isEmpty() && stack.peek() < num) {
				dic.replace(stack.pop(), num);
			}
			stack.push(num);
			dic.put(num, -1);
		}
		
		for (int i = 0; i < result.length; i++) {
			result[i] = dic.get(findNums[i]);
		}
        return result;
    }
}
```

