# 387. First Unique Character in a String
          

---

## Description

> Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

```
Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

```

> Note: You may assume the string contain only lowercase letters.


## Java

解法一：笨办法，建立字典，键为字符，值为数组，第一位保存字符下标，第二位保存字符出现次数。然后遍历字典中出现次数为1的字符，并找出下标最小的字符，返回即可。

```java
import java.util.HashMap;

public class Solution {
	public int firstUniqChar(String s) {
		HashMap<Character, int[]> dic = new HashMap<Character, int[]>();
		for (int i = 0; i < s.length(); i++) {
			char ch = s.charAt(i);
			int[] item;
			if (dic.containsKey(ch)) {
				item = dic.get(ch);
				item[1] += 1;
				dic.replace(ch, item);
			} else {
				item = new int[2];
				item[0] = i;
				item[1] = 1;
				dic.put(ch, item);
			}
		}
		int result = s.length();
		for (char ch: dic.keySet()) {
			if (dic.get(ch)[1] == 1 && dic.get(ch)[0] < result) {
				result = dic.get(ch)[0];
			}
		}
        return result == s.length() ? -1 : result;
    }
}
```

解法二：简单办法，建立一个数组，保存每一个字母出现的次数，然后从字符串第一个开始循环，找出出现次数为1的第一个字符。

```java
public class Solution {
    public int firstUniqChar(String s) {
        int freq [] = new int[26];
        for(int i = 0; i < s.length(); i ++)
            freq [s.charAt(i) - 'a'] ++;
        for(int i = 0; i < s.length(); i ++)
            if(freq [s.charAt(i) - 'a'] == 1)
                return i;
        return -1;
    }
}
```

## Python

解法三：调用API查找。

```python
class Solution(object):
    def firstUniqChar(self, s):
        for i in range(len(s)):
            if s.find(s[i], i + 1) == -1 and s.rfind(s[i], 0, i) == -1:
                return i
        return -1
```
