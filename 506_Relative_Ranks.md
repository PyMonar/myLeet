# 506. Relative Ranks
          

---

## Description

> Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

```
Example 1:

Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". For the left two athletes, you just need to output their relative ranks according to their scores.

```


```
Note:

N is a positive integer and won&apos;t exceed 10,000.
All the scores of athletes are guaranteed to be unique.
```



## Java

解法一：TreeSet，指定排序细节，然后构造TreeSet，然后遍历给出结果。

```java
import java.util.Iterator;
import java.util.TreeSet;

public class Solution {
	public String[] findRelativeRanks(int[] nums) {
        TreeSet ts = new TreeSet();
        for (int i = 0; i < nums.length; i++) {
        	ts.add(new Athletes(nums[i], i));
        }
        Iterator i = ts.iterator();
        int place = 1;
        String award;
        String[] result = new String[nums.length];
        while (i.hasNext()) {
        	Athletes a = (Athletes)i.next();
        	award = String.valueOf(place);
        	if (award.equals("1")) {
        		a.award = "Gold Medal";
        	} else if (award.equals("2")) {
        		a.award = "Silver Medal";
        	} else if (award.equals("3")) {
        		a.award = "Bronze Medal";
        	} else {
        		a.award = award;
        	}
        	result[a.index] = a.award;
        	place++;
        } 
		return result;
    }
}

class Athletes implements Comparable{
	public int score;
	public int index;
	public String award;
	
	public Athletes(int score, int index) {
		this.score = score;
		this.index = index;
	}

	@Override
	public int compareTo(Object o) {
		Athletes a = (Athletes)o;
		return a.score - this.score;
	}
}
```

解法二：构造另一个index数组，表示最终分数的下标排序结果，然后取index数组值来构造最终结果。

```java
public class Solution {
    public String[] findRelativeRanks(int[] nums) {
        Integer[] index = new Integer[nums.length];
        
        for (int i = 0; i < nums.length; i++) {
            index[i] = i;
        }
        
        Arrays.sort(index, (a, b) -> (nums[b] - nums[a]));
        
        String[] result = new String[nums.length];

        for (int i = 0; i < nums.length; i++) {
            if (i == 0) {
                result[index[i]] = "Gold Medal";
            }
            else if (i == 1) {
                result[index[i]] = "Silver Medal";
            }
            else if (i == 2) {
                result[index[i]] = "Bronze Medal";
            }
            else {
                result[index[i]] = (i + 1) + "";
            }
        }
        return result;
    }
}
```