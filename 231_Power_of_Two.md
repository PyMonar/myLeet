# 231. Power of Two

---
## Description

> Given an integer, write a function to determine if it is a power of two.

## Javascript

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }
    while (n % 2 === 0) {
        n = n / 2;
    }
    if ( n === 1) {
        return true;
    }
    return false;
};
```

## Java

```java
public class Solution {
    public boolean isPowerOfTwo(int n) {
        return (n > 0 && Integer.bitCount(n) == 1);
    }
}
```