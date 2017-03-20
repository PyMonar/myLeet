# 448. Find All Numbers Disappeared in an Array
          

---

## Description

> Given an array of integers where 1 <= a[i] <= n (n = size of array), some elements appear twice and others appear once.
> Find all the elements of [1, n] inclusive that do not appear in this array.
> Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

```
Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

```



## Java

解法一： HashMap法

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Solution {
	public List<Integer> findDisappearedNumbers(int[] nums) {
		HashMap<Integer, Integer> dic = new HashMap<Integer, Integer>();
		List<Integer> result = new ArrayList<Integer>();
		for (int i = 0; i < nums.length; i++) {
			if (dic.containsKey(nums[i])) {
				dic.replace(nums[i], dic.get(nums[i]) + 1);
			} else {
				dic.put(nums[i], 1);
			}
		}
		
		for (int i = 1; i <= nums.length; i++) {
			if (!dic.containsKey(i)) {
				result.add(i);
			}
		}
        return result;
	}
}
```

解法二：数组排除法

```java
import java.util.ArrayList;
import java.util.List;

public class Solution {
	public List<Integer> findDisappearedNumbers(int[] nums) {
		int[] copy = new int[nums.length];
		List<Integer> result = new ArrayList<Integer>();
		for (int i = 0; i < nums.length; i++) {
			copy[i] = i + 1;
		}
	
		for (int i = 0; i < nums.length; i++) {
			copy[nums[i] - 1] = -1;
		}
		
		
		for (int i = 0; i < nums.length; i++) {
			if (copy[i] != -1) {
				result.add(copy[i]);
			}
		}
        return result;
	}
}
```

前两种解法速度慢，而且开辟新的空间了，虽然比较好理解，但是速度不快，建议使用第三种方法，比较巧。我特么为什么想不出来T.T
解法三：绝对值法

```java
public List<Integer> findDisappearedNumbers(int[] nums) {
    List<Integer> ret = new ArrayList<Integer>();
    
    for(int i = 0; i < nums.length; i++) {
        int val = Math.abs(nums[i]) - 1;
        if(nums[val] > 0) {
            nums[val] = - nums[val];
        }
    }
    
    for(int i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            ret.add(i + 1);
        }
    }
    return ret;
}
```
