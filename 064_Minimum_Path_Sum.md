# 64. Minimum Path Sum

---

## Description

> Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

## Javascript

```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var i, j;
    var m = grid.length;
    var n = grid[0].length;
    for ( i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                continue;
            }

            if (i === 0) {
                grid[i][j] += grid[i][j - 1];
            } else if (j === 0) {
                grid[i][j] += grid[i - 1][j];
            } else {
               var temp = grid[i][j - 1] < grid[i - 1][j] ? grid[i][j - 1] : grid[i - 1][j];
               grid[i][j] += temp;
            }
        }
    }

    return grid[m-1][n-1];
};
```
