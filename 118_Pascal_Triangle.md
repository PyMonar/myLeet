# 118. Pascal's Triangle

---

## Description

> Given numRows, generate the first numRows of Pascal's triangle.

> For example, given numRows = 5,
> Return
```
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

## Javascript


```
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var outer = [];
    var inner;
    var cur, pre;
    for (var i = 0; i < numRows; i++) {
        inner = [];
        inner.push(1);
        for (var k = 1; k < i + 1; k++) {
            cur = k === i ? 0 : outer[i - 1][k];
            pre = k === 0 ? 0 : outer[i - 1][k - 1];
            inner.push(cur + pre);
        }
        outer.push(inner);
    }
    return outer;
};
```
