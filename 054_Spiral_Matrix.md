# 54. Spiral Matrix

---

## Description

> Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

> For example,
> Given the following matrix:

```
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
```

> You should return [1,2,3,6,9,8,7,4,5].


## Javascript

```
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return [];
    }
    var result = [];
    var direct = 0;
    var step_y = matrix.length;
    var step_x = matrix[0].length;
    var i;
    var m = 0, n = 0;

    for (i = 0; i <= step_x - 1; i++) {
        result.push(matrix[m][i]);
    }
    n = i - 1;
    step_y--;
    direct = 1;

    while (step_x !== 0 && step_y !== 0) {
        if (direct === 0) {
            for (i = n + 1; i <= step_x + n; i++) {
                result.push(matrix[m][i]);
            }
            n = i - 1;
            step_y--;
            direct = 1;
        } else if (direct === 1){
            for (i = m + 1; i <= step_y + m; i++) {
                result.push(matrix[i][n]);
            }
            m = i - 1;
            step_x--;
            direct = 2;
        } else if (direct === 2) {
            for (i = n - 1; i >=  n - step_x; i--) {
                result.push(matrix[m][i]);
            }
            n = i + 1;
            step_y--;
            direct = 3;
        } else {
            for (i = m - 1; i >= m - step_y; i--) {
                result.push(matrix[i][n]);
            }
            m = i + 1;
            step_x--;
            direct = 0;
        }
    }

    return result;
};
```
