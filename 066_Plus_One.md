# 66. Plus One

---

## Description

> Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
> You may assume the integer do not contain any leading zero, except the number 0 itself.
> The digits are stored such that the most significant digit is at the head of the list.


## Java

```java
public class Solution {
    public int[] plusOne(int[] digits) {
        List<Integer> list = new ArrayList<Integer>();
        int r = 0, i = digits.length - 1;
        int cur;
        while (i >= 0) {
            if (i == digits.length - 1) {
                cur = digits[i] + 1 + r;
            } else {
                cur = digits[i] + r;
            }
            r = cur / 10;
            list.add(0, cur % 10);
            i--;
        }
        if (r != 0) list.add(0, r);
        int[] res = new int[list.size()];
        for (int j = 0; j < res.length; j++) {
            res[j] = (int)list.get(j);
        }
        return res;
    }
}
```