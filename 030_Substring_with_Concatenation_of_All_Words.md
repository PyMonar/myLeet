# 30. Substring with Concatenation of All Words

---

## Description

> You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

```
For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]
```
You should return the indices: [0,9].
(order does not matter).


## Python

```python
class Solution(object):
    def findSubstring(self, s, words):
        """
        :type s: str
        :type words: List[str]
        :rtype: List[int]
        """
        result = []
        dic = {}
        
        word_size = len(words[0])
        word_nums = len(words)
        s_size = len(s)
        
        for word in words:
            if word in dic:
                dic[word] += 1
            else:
                dic[word] = 1
        
        for i in range(0, s_size - word_size * word_nums + 1):
            cache = {}
            j = 0
            while j < word_nums: 
                word = s[i + j * word_size: i + (j + 1) * word_size]
                if word in dic:
                    if word in cache:
                        cache[word] += 1
                    else :
                        cache[word] = 1
                    if cache[word] > dic[word]:
                        break
                else:
                    break
                j += 1
                
            if j == word_nums:
                result.append(i)    
            
        return result
```
