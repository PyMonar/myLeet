# 63. Unique Paths II

---

## Description

> Follow up for "Unique Paths":

> Now consider if some obstacles are added to the grids. How many unique paths would there be?

> An obstacle and empty space is marked as 1 and 0 respectively in the grid.

> For example,
> There is one obstacle in the middle of a 3x3 grid as illustrated below.

```
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
```

> The total number of unique paths is 2.

> Note: m and n will be at most 100.

## Javascript

```
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    var i, j;
    var flag = false;
    for (j = 0; j < n; j++) {
        if (obstacleGrid[0][j] === 0 && !flag) {
            obstacleGrid[0][j] = 1;
        } else {
            obstacleGrid[0][j] = 0;
            flag = true;
        }
    }
    flag = false;
    for (i = 1; i < m; i++) {
        if (obstacleGrid[i][0] === 0 && !flag) {
            obstacleGrid[i][0] = 1;
        } else {
            obstacleGrid[i][0] = 0;
            flag = true;
        }
    }


    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            } else {
                obstacleGrid[i][j] = 0;
            }
        }
    }

    return obstacleGrid[m - 1][n - 1];
};
```
