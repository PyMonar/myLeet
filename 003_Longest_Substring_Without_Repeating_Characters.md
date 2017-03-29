# 3. Longest Substring Without Repeating Characters
          

---

## Description

> Given a string, find the length of the longest substring without repeating characters.
> Examples:
> Given "abcabcbb", the answer is "abc", which the length is 3.
> Given "bbbbb", the answer is "b", with the length of 1.
> Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


## Java

解法一：hash表存储一个字符是否出现过，并且记录下标。

从字符串第一个字符开始循环，一旦发现重复字符，则结算已经发现的最长子串到result里边。并且更新下次起始查找的位置start。

start更新有两种情况，如果发现当前重复字符的下标小于start可以直接忽略，因为start之前的子串已经遍历过了。如果重复字符的下标大于start，可以直接将start赋值为该下标，即下次查找直接从重复字符往后查找即可。

如果尚未重复则计入本次查找的最长子串里边。

```java
public int lengthOfLongestSubstring(String s) {
    if (s.length() == 0) {
        return 0;
    }
    HashMap<Character, Integer> dic = new HashMap<Character, Integer>();
    int result = 0, tmp = 0, start = 0;
    for (int i = 0; i < s.length(); i++) {
        char ch = s.charAt(i);
        if (dic.containsKey(ch)) {
            result = result > tmp ? result : tmp;
            start = dic.get(ch) <= start ? start : dic.get(ch);
            tmp = i - start;
            dic.replace(ch, i);
        } else {
            dic.put(ch, i);
            tmp++;
        }
    }
    result = result > tmp ? result : tmp;
    return result;
}
```