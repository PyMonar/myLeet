# 371. Sum of Two Integers

---

## Description

> Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

```
Example:
Given a = 1 and b = 2, return 3.
```


## C

```c
int getSum(int a, int b) {
    while(a != 0) {
        int tmp = (a & b) << 1;
        b = a ^ b;
        a = tmp;
    }
    return b;
}
```
