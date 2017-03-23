# 453. Minimum Moves to Equal Array Elements
          

---

## Description

> Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

```
Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

```



## Java

解法一：固定最大值不动，其余值加一，直到全部相等。这是笨办法，对于某些极端情况超时。

```java
public class Solution {
    public int minMoves(int[] nums) {
        int step = 0;
        while (!isOver(nums)) {
        	addOne(nums, getMaxIndex(nums));
        	step++;
        }
		return step;
    }
	
	public boolean isOver(int[] nums) {
		int tar = nums[0];
		for (int num : nums) {
			if (tar != num) {
				return false;
			}
		}
		return true;
	}
	
	public void addOne(int[] nums, int maxIndex) {
		for (int i = 0; i < nums.length; i++) {
			if (i != maxIndex) {
				nums[i] += 1;
			}
		}
	}
	
	public int getMaxIndex(int[] nums) {
		int maxIndex = 0;
		int maxValue = nums[0];
		for (int i = 0; i < nums.length; i++) {
			if (nums[i] >= maxValue) {
				maxIndex = i;
				maxValue = nums[i];
			}
		}
		return maxIndex;
	}
}
```

解法二：太特么牛逼了！

```
let's define sum as the sum of all the numbers, before any moves; minNum as the min number int the list; n is the length of the list;

After, say m moves, we get all the numbers as x , and we will get the following equation

sum + m * (n - 1) = x * n

and actually,

x = minNum + m

and finally, we will get

sum - minNum * n = m

So, it is clear and easy now.
```

```java
public class Solution {
    public int minMoves(int[] nums) {
        int sum = 0;
        int minValue = nums[0];
        for (int num : nums) {
        	minValue = minValue < num ? minValue : num;
        	sum += num;
        }
        return sum - nums.length * minValue; 
    }
}
```