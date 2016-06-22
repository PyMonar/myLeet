# 187. Repeated DNA Sequences

---

## Description

> All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
> Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
> For example,

```
Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

Return:
["AAAAACCCCC", "CCCCCAAAAA"].
```
## Javascript

```
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if (s.length <= 10) {
        return [];
    }

    var dic = {};
    var l = s.length, start = 0, end = 9, cur;
    while (end < l) {
        cur = s.slice(start++, (end++) + 1);
        if (dic[cur]) {
            dic[cur] ++;
        } else {
            dic[cur] = 1;
        }
    }

    var result = [];
    for (var key in dic) {
        if (dic[key] !== 1) {
            result.push(key);
        }
    }

    return result;
};
```
