# 240. Search a 2D Matrix II

---

## Description

> Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

> Integers in each row are sorted in ascending from left to right.
> Integers in each column are sorted in ascending from top to bottom.
> For example,

> Consider the following matrix:

```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```
> Given target = 5, return true.

> Given target = 20, return false.

## Javascript


```
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var r = matrix.length, c = matrix[0].length;

    if (target < matrix[0][0] || target > matrix[r - 1][c - 1]) {
        return false;
    }

    var i, j;
    for (i = 0; i < r; i++) {
        if (target > matrix[i][c - 1]) {
            continue;
        }
        if (find(matrix[i], target)) {
            return true;
        }
    }

    return false;
};

var find = function (arr, target) {
    var i = 0,
        j = arr.length - 1;
    var index;

    while (i < j) {
        index = Math.floor((i + j) / 2);
        if (arr[index] === target) {
            return true;
        } else if (arr[index] > target) {
            j = index - 1;
        } else {
            i = index + 1;
        }
    }

    if (arr[i] === target) {
        return true;
    } else {
        return false;
    }
};
```
