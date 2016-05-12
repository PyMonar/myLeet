# 216. Combination Sum III

---

## Description

> Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

> Ensure that numbers within the set are sorted in ascending order.


> Example 1:

> Input: k = 3, n = 7

> Output:

```
[[1,2,4]]
```

> Example 2:

> Input: k = 3, n = 9

> Output:

```
[[1,2,6], [1,3,5], [2,3,4]]
```

## Javascript


```
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var result;
var combinationSum3 = function(k, n) {
    result = [];
    if (k > 9 || n > 45) {
        return result;
    }

    find(k, n, 1, []);
    return result;
};

var find = function(k, n, from, items) {
    var cur;
    if (k === 1 && n >= 1 && n <= 9) {
        items.push(n);
        result.push(items);
        console.log(result.toString());
        return;
    }

    for (var i = from; i <= 9; i++) {
        cur = items.concat();
        cur.push(i);
        if (n - i >= i + 1) {
            find(k - 1, n - i, i + 1, cur);
        }
    }
};
```
