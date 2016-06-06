# 200. Number of Islands

---

## Description

> Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

> Example 1:

```
11110
11010
11000
00000
```

> Answer: 1

> Example 2:

```
11000
11000
00100
00011
```

> Answer: 3

## Javascript


```
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var m = grid.length;
    if (m === 0) {
        return 0;
    }
    var n = grid[0].length;
    if (n === 0) {
        return 0;
    }

    var result = 0;

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == '1') {
                result++;
                dfs(grid, i, j, m, n);
            }
        }
    }

    return result;
};

var dfs = function (grid, i, j, m, n) {
    if (i < 0 || j < 0 || i > m - 1 || j > n - 1) {
        return;
    }

    if (grid[i][j] == '1') {
        grid[i][j] = '0';
        dfs(grid, i - 1, j, m, n);
        dfs(grid, i + 1, j, m, n);
        dfs(grid, i, j - 1, m, n);
        dfs(grid, i, j + 1, m, n);
    }
};
```
