# 77. Combinations

---

## Description

> Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

> For example,
> If n = 4 and k = 2, a solution is:

```
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

## Javascript


```
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var results;
var combine = function(n, k) {
    results = [];
    solution(1, n, k, []);
    return results;
};

var solution = function (i, n, k, arr) {
    if (k === 0) {
        results.push(arr);
        return;
    }
    if ( n - i < k) {
        arr.push(i);
        solution(i + 1, n, k - 1, arr.slice());
    } else {
        solution(i + 1, n, k, arr.slice());
        arr.push(i);
        solution(i + 1, n, k - 1, arr.slice());   
    }
};
```
