# 221. Maximal Square

---

## Description

> Given a 2D binary matrix filled with 0's and 1's, find the largest square containing all 1's and return its area.

> For example, given the following matrix:

```
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
```
> Return 4.


## Javascript

```
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length === 0) {
        return 0;
    }

    var i, j;
    var m = matrix.length;
    var n = matrix[0].length;
    var max = 0;
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            matrix[i][j] -= 0;
            if (matrix[i][j] === 0) {
                continue;
            }

            if (i !== 0 && j !== 0) {
                helper(i, j, matrix);
            }

            max = max > matrix[i][j] ? max : matrix[i][j];
        }
    }

    return max;
};

var helper = function(x, y, matrix) {
    if (matrix[x - 1][y - 1] === 0) {
        return;
    }
    var step = Math.sqrt(matrix[x - 1][y - 1]);
    for (var i = 1; i <= step; i++) {
        if ((matrix[x - i][y] && matrix[x][y - i])) {
            var l = Math.sqrt(matrix[x][y]) + 1;
            matrix[x][y] = l * l;
        } else {
            return;
        }
    }
};
```
