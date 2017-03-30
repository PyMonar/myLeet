# 415. Add Strings

---

## Description

> Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

```
Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

```

## Java

```java
public class Solution {
    public String addStrings(String num1, String num2) {
        StringBuilder sb = new StringBuilder();
        int l1 = num1.length() - 1, l2 = num2.length() - 1;
        int r = 0;
        while (l1 >= 0 || l2 >= 0 || r == 1) {
            int x = l1 >= 0 ? num1.charAt(l1--) - '0' : 0;
            int y = l2 >= 0 ? num2.charAt(l2--) - '0' : 0;
            
            sb.append( (x + y + r) % 10);
            r = (x + y + r) / 10;
        }
        return sb.reverse().toString();
    }
}
```