# 304. Range Sum Query 2D - Immutable

---

## Description

> Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

> Example:

```
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]
sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
```


> Note:

> 1. You may assume that the matrix does not change.

> 2. There are many calls to sumRegion function.

> 3. You may assume that row1 ≤ row2 and col1 ≤ col2.


## Javascript

```javascript
/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
    this.flag = true;
    if (matrix.length === 0 || matrix[0].length === 0) {
        this.flag = false;
        return;
    }
    var m = matrix.length;
    var n = matrix[0].length;

    var i, j, sum = 0;
    for (i = 0; i < m; i++) {
        this.matrix[i][0] += sum;
        sum = this.matrix[i][0];
    }

    sum = 0;
    for (i = 0; i < n; i++) {
        this.matrix[0][i] += sum;
        sum = this.matrix[0][i];
    }

    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            this.matrix[i][j] += this.matrix[i - 1][j] + this.matrix[i][j - 1] - this.matrix[i - 1][j - 1];
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if (!this.flag) {
        return 0;
    }
    var n1 = this.matrix[row2][col2];
    var n2, n3, n4;
    n2 = row1 - 1 < 0 ? 0 : this.matrix[row1 - 1][col2];
    n3 = col1 - 1 < 0 ? 0 : this.matrix[row2][col1 - 1];
    n4 = row1 - 1 < 0 || col1 - 1 < 0 ? 0 : this.matrix[row1 - 1][col1 - 1];
    return n1 - n2 - n3 + n4;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */
```
