# 171. Excel Sheet Column Number
          

---

## Description

> Related to question Excel Sheet Column Title
> Given a column title as appear in an Excel sheet, return its corresponding column number.
> For example:
```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
```


## Java

```java
public class Solution {
    public int titleToNumber(String s) {
		int r = s.length() - 1;
		int result = 0;
		for (int i = 0; i <= r; i++) {
			result = result * 26 + (s.charAt(i) - 'A' + 1); 
            // OR
            // result += Math.pow(26, r - i) * (s.charAt(i) - 'A' + 1);
		}
		return result;
    }
}
```
