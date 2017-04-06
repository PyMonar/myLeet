# 434. Number of Segments in a String

---

## Description

> Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.
> Please note that the string does not contain any non-printable characters.

Example:

```
Input: "Hello, my name is John"
Output: 5
```

## Java

```java
public class Solution {
    public int countSegments(String s) {
        int res = 0;
        int i = 0;
        while (i < s.length()) {
            while (i < s.length() && s.charAt(i) == ' ') {
                i++;
            }
            if (i == s.length()) break;
            res++;
            while (i < s.length() && s.charAt(i) != ' ') {
                i++;
            }
        }
        return res;
    }
}
```