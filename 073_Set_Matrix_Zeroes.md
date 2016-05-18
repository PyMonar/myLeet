# 73. Set Matrix Zeroes

---

## Description

> Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

## Javascript


```
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var i, j;
    var lr = matrix.length;
    var lc = matrix[0].length;
    var row = [];
    var col = [];
    for (i = 0; i < lr; i++) {
        for (j = 0; j < lc; j++) {
            if (matrix[i][j] === 0) {
                if (row.indexOf(i) === -1) {
                    row.push(i);
                }

                if (col.indexOf(j) === -1) {
                    col.push(j);
                }
            }
        }
    }

    for (i = 0; i < row.length; i++) {
        for (j = 0; j < lc; j++) {
            matrix[row[i]][j] = 0;
        }
    }

    for (j = 0; j < col.length; j++) {
        for (i = 0; i < lr; i++) {
            matrix[i][col[j]] = 0;
        }
    }
};
```
