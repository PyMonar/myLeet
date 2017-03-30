# 541. Reverse String II
          

---

## Description

> Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

```
Example:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
```



## Java

```java
public class Solution {
    public String reverseStr(String s, int k) {
        char[] sets = s.toCharArray();
        int i = 0, j, n = s.length();
        while (i < n) {
            j = Math.min(i + k - 1, n - 1);
            reverse(sets, i, j);
            i += 2 * k;
        }
        return String.valueOf(sets);
    }
    
    public void reverse(char[] sets, int i, int j) {
        char temp;
        while (i < j) {
            temp = sets[i];
            sets[i] = sets[j];
            sets[j] = temp;
            i++;
            j--;
        }
    }
}
```