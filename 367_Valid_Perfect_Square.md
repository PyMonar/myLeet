# 367. Valid Perfect Square

---

## Description

> Given a positive integer num, write a function which returns True if num is a perfect square else False.
> Note: Do not use any built-in library function such as sqrt.

```
Example 1:

Input: 16
Returns: True

```


```
Example 2:

Input: 14
Returns: False

```


## Java

解法一：二分查找，注意，mid需要设置为long，因为乘积有可能会超限。

```java
public class Solution {
    public boolean isPerfectSquare(int num) {
        int i = 0, j = num;
        while (i <= j) {
            long mid = (i + j) / 2;
            long res = mid * mid;
            if (res == num) {
                return true;
            } else if (res > num) {
                j = (int)mid - 1;
            } else {
                i = (int)mid + 1;
            }
        }
        return false;
    }
}
```