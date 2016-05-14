# 59. Spiral Matrix II

---

## Description

> Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

> For example,
> Given n = 3,

> You should return the following matrix:

```
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

## Javascript

```
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var results = [];
    var i, j;
    for (i = 0; i < n; i++) {
        results.push([]);
        for (j = 0; j < n; j++) {
            results[i].push(0);
        }
    }

    solution(0, 0, n, 1, results);

    return results;
};

var solution = function (a, b, l, start, results) {
    if (l === 0) {
        return;
    }

    if (l === 1) {
        results[a][b] = start;
        return;
    }
    var i;
    for (i = 0; i < l; i++) {
        results[a][i + b] = start;
        start++;
    }

    for (i = 1; i <= l - 1; i++) {
        results[a + i][b + l - 1] = start;
        start++;
    }

    for (i = 1; i <= l - 1; i++) {
        results[a + l -1][b + l - 1 - i] = start;
        start++;
    }

    for (i = 1; i <= l - 2; i++) {
        results[a + l - 1 - i][b] = start;
        start++;
    }

    solution(a + 1, b + 1, l - 2, start, results);
};
```
