# 326. Power of Three

---

## Description

> Given an integer, write a function to determine if it is a power of three.

```
Follow up:
    Could you do it without using any loop / recursion?
```


## Java

```java
public class Solution {
    public boolean isPowerOfThree(int n) {
        // 1162261467 是3的19次方，也就是能表示的最大次方数，所以只要是3的次方都能整除这个数。
        return (n > 0 && 1162261467 % n == 0);
    }
}
```