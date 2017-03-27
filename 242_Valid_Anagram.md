# 242. Valid Anagram

---

## Description

> Given two strings s and t, write a function to determine if t is an anagram of s.

```
For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.
```

```
Note:
You may assume the string contains only lowercase alphabets.
```

```
Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
```



## Java

解法一：字典法。

```java
public class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.equals(t)) {
            return true;
        }
        
        if (s.length() != t.length()) {
            return false;
        }
        
        HashMap<Character, Integer> dic = new HashMap<Character, Integer>();
        for (char ch : s.toCharArray()) {
            if (dic.containsKey(ch)) {
                dic.replace(ch, dic.get(ch) + 1);
            } else {
                dic.put(ch, 1);
            }
        }
        
        for (char ch : t.toCharArray()) {
            if (dic.containsKey(ch) && dic.get(ch) > 0) {
                dic.replace(ch, dic.get(ch) - 1);
            } else {
                return false;
            }
        }
        return true;
    }
}
```

解法二：字典法二。

```java
public class Solution {
    public boolean isAnagram(String s, String t) {
        int[] alphabet = new int[26];
        for (int i = 0; i < s.length(); i++) alphabet[s.charAt(i) - 'a']++;
        for (int i = 0; i < t.length(); i++) alphabet[t.charAt(i) - 'a']--;
        for (int i : alphabet) if (i != 0) return false;
        return true;
    }
}
```