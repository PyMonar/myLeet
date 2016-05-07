# 96. Unique Binary Search Trees

---

## Description

> Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

> For example,
> Given n = 3, there are a total of 5 unique BST's.

```
   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

## Javascript

```
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    var cache = [1, 1];
    var result;
    for (var i = 2; i <= n; i++) {
        result = 0;
        for (var j = 0; j < i; j++) {
            result += cache[j] * cache[i - 1 - j];
        }
        cache.push(result);
    }
    return cache[n];
};
```
