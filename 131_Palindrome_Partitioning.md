# 131. Palindrome Partitioning

---

## Description

> Given a string s, partition s such that every substring of the partition is a palindrome.

> Return all possible palindrome partitioning of s.

> For example, given s = "aab",
> Return

```
[
  ["aa","b"],
  ["a","a","b"]
]
```

## Javascript


```
/**
 * @param {string} s
 * @return {string[][]}
 */
var result;
var partition = function(s) {
    result = [];
    if (s.length === 0) {
        return [[]];
    }

    solution(s, 0, 1, []);
    return result;
};

var solution = function (s, i, j, item) {
    if (j === s.length) {
        if (isRight(s.slice(i, j))) {
            item.push(s.slice(i, j));
            result.push(item);
        }
        return;
    }

    if (isRight(s.slice(i, j))) {
        var temp = item.slice();
        temp.push(s.slice(i, j));
        solution(s, j, j + 1, temp.slice());
    }
    solution(s, i, j + 1, item.slice());
};

var isRight = function (s) {
    return s.split('').reverse().join('') === s;
};
```
