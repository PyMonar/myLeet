# 119. Pascal's Triangle II

---

## Description

> Given an index k, return the kth row of the Pascal's triangle.

> For example, given k = 3,
> Return [1,3,3,1].

## Javascript

```
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var results = [];
    var result, cur, pre;
    for (var i = 0; i <= rowIndex; i++) {
        result = [];
        result.push(1);
        for (var k = 1; k <= i; k++) {
            cur = k === i ? 0 : results[i - 1][k];
            pre = k === 0 ? 0 : results[i - 1][k - 1];
            result.push(cur + pre);
        }
        results.push(result);
        if (i === rowIndex) {
            return result;
        }
    }
    return results;
};
```
