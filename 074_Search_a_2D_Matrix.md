# 74. Search a 2D Matrix

---

## Description

> Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

> Integers in each row are sorted from left to right.
> The first integer of each row is greater than the last integer of the previous row.
> For example,

> Consider the following matrix:

```
[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
```
> Given target = 3, return true.

## Javascript


```
/**
* @param {number[][]} matrix
* @param {number} target
* @return {boolean}
*/
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) {
        return false;
    }

    var row = matrix.length;
    var col = matrix[0].length;

    if (target < matrix[0][0] || target > matrix[row - 1][col - 1]) {
        return false;
    }

    for (var i = 0; i < row; i++) {
        if (binarySearch(matrix[i], target)) {
            return true;
        }
    }

    return false;
};

var binarySearch = function (arr, target) {
    var i = 0, j = arr.length - 1;
    var index;
    while (i <= j) {
        index = Math.floor( (i + j) / 2);
        if (arr[index] === target) {
            return true;
        } else if (arr[index] > target) {
            j = index - 1;
        } else {
            i = index + 1;
        }
    }
    return false;
};
```
