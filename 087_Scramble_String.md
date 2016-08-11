# 87. Scramble String

---

## Description

Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

Below is one possible representation of s1 = "great":

```
   great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
```

To scramble the string, we may choose any non-leaf node and swap its two children.

For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".

```
    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
```
We say that "rgeat" is a scrambled string of "great".

Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".

```
    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
```

We say that "rgtae" is a scrambled string of "great".

Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.


## Javascript

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    var l1 = s1.length;
    var l2 = s2.length;

    if (l1 !== l2) {
        return false;
    }

    if (l1 === 1) {
        return s1 === s2;
    }

    var flag;
    flag = s1.split('').sort().join('') === s2.split('').sort().join('');

    if (!flag) {
        return false;
    }

    flag = false;
    var s11, s12, s21, s22;
    for (var i = 1; i < l1 && !flag; i++) {
        s11 = s1.slice(0, i);
        s12 = s1.slice(i);

        s21 = s2.slice(0, i);
        s22 = s2.slice(i);

        flag = isScramble(s11, s21) && isScramble(s12, s22);

        if (!flag) {
            s21 = s2.slice(l1 - i);
            s22 = s2.slice(0, l1 - i);

            flag =  isScramble(s11, s21) && isScramble(s12, s22);
        }
    }
    return flag;
};
```