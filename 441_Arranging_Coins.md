# 441. Arranging Coins

---

## Description

> You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.
> Given n, find the total number of full staircase rows that can be formed.
> n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:
```
n = 5

The coins can form the following rows:
*
* *
* *
Because the 3rd row is incomplete, we return 2.
```

Example 2:
```
n = 8

The coins can form the following rows:
*
* *
* * *
* *
Because the 4th row is incomplete, we return 3.
```

## Java

解法一：暴力。

```java
public class Solution {
    public int arrangeCoins(int n) {
        int res = 0, left = n;
        while (left >= res) {
            left -= res;
            res++;
        }
        return --res;
    }
}
```

解法二：二分查找。

1 + 2 + 3 + ... + x <= n， 目的是寻找最大的x，简化公式就是 (x + 1) * x <= n，可以通过二分查找来缩短查找时间：

```java
public class Solution {
    public int arrangeCoins(int n) {
        int start = 0;
        int end = n;
        int mid = 0;
        while (start <= end){
            mid = (start + end) >>> 1;
            if ((0.5 * mid * mid + 0.5 * mid ) <= n){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }
        return start - 1;
    }
}
```