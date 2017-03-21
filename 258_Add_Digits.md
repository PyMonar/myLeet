# 258. Add Digits
          

---

## Description

> Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
> For example:
> Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

```
Follow up:
Could you do it without any loop/recursion in O(1) runtime?
```


## Java

解法一：递归解法。

```java
public class Solution {
    public int addDigits(int num) {
		if (num <= 9) {
			return num;
		}
		int result = 0;
		while (num > 9) {
			result += num % 10;
			num /= 10;
		}
		result += num;
		return addDigits(result);
    }
}
```

解法二：循环。

```java
public class Solution {
    public int addDigits(int num) {
		if (num <= 9) {
			return num;
		}
		int result = num, tmp, nums;
		while (result > 9) {
			nums = result;
			tmp = 0;
			while (nums > 0) {
				tmp += nums % 10;
				nums /= 10;
			}
			result = tmp;
		}
		return result;
    }
}
```

解法三：数学法.....(坑爹

```java
public class Solution {
    public int addDigits(int num) {
        int res = num % 9;
        return (res != 0 || num == 0) ? res : 9;
    }
}
```
