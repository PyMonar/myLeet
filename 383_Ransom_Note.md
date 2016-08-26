# 383. Ransom Note

---

## Description

Given  an  arbitrary  ransom  note  string  and  another  string  containing  letters from  all  the  magazines,  write  a  function  that  will  return  true  if  the  ransom   note  can  be  constructed  from  the  magazines ;  otherwise,  it  will  return  false.   

Each  letter  in  the  magazine  string  can  only  be  used  once  in  your  ransom  note.

Note:
You may assume that both strings contain only lowercase letters.

```
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

## Python

```python
class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        dicm = {}
        for s in magazine:
            if s in dicm:
                dicm[s] += 1
            else:
                dicm[s] = 1
        for s in ransomNote:
            if s in dicm and dicm[s] > 0:
                dicm[s] -= 1
            else:
                return False
        return True
```
