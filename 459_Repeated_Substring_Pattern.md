# 459. Repeated Substring Pattern

---

## Description

> Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length  will not exceed 10000.

```
Example 1:

Input: "abab"

Output: True

Explanation: It's the substring "ab" twice.

```


```
Example 2:

Input: "aba"

Output: False

```


```
Example 3:

Input: "abcabcabcabc"

Output: True

Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

```

## Java

解法一： step为子字符串步长，并且可以整除字符串长度，取步长子字符串逐段比较字符串即可。

```java
public class Solution {
    public boolean repeatedSubstringPattern(String s) {
        int len = s.length();
        int step = 1, i, j;
        String sub;
        // 优化：step <= len / 2
        while (step < len) {
            if (len % step != 0) {
                step++;
                continue;
            }
            sub = s.substring(0, step);
            i = 0;
            while (i < len) {
                j = i + step;
                if (!s.substring(i, j).equals(sub)) break;
                i += step;
            }
            if (i == len) return true;
            step++;
        }
        return false;
    }
}
```