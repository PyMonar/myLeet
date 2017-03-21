# 371. Sum of Two Integers

---

## Description

> Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

```
Example:
Given a = 1 and b = 2, return 3.
```


## C

思路：a ^ b运算可以表示如果不考虑进位，那么结果是多少

(a & b) << 1 运算可以表示进位结果

进位结果不为0的时候循环，直到为0，则结果出来。

```c
int getSum(int a, int b) {
    // 假设a为进位
    while(a != 0) {
        // a & b并左移，表示的就是进位后的结果
        int tmp = (a & b) << 1;
        // a ^ b 表示如果不考虑进位，那么结果是多少
        b = a ^ b;
        a = tmp;
    }
    return b;
}
```

# Java

```java
public int getSum(int a, int b) {
    int r;
    while (a != 0) {
        r = (a & b) << 1;
        b = a ^ b;
        a = r;
    }
    return b;
}
```