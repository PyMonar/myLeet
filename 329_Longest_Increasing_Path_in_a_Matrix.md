# 329. Longest Increasing Path in a Matrix

---

## Description

> Given an integer matrix, find the length of the longest increasing path.
> From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

> Example 1:

```
nums = [
  [9,9,4],
  [6,6,8],
  [2,1,1]
]

```
> Return 4

> The longest increasing path is [1, 2, 6, 9].

> Example 2:

```
nums = [
  [3,4,5],
  [3,2,6],
  [2,2,1]
]

```
> Return 4

> The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

## Javascript

```javascript
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    var row = matrix.length;
    if (row === 0) {
        return 0;
    }
    
    var col = matrix[0].length;
    var result = 0;
    // cache longest
    var visited = [],
        i, j;
    for (i = 0; i < row; i++) {
        var item = [];
        for (j = 0; j < col; j++) {
            item.push(0);
        }
        visited.push(item);
    }

    for (i = 0; i < row; i++) {
        for (j = 0; j < col; j++) {
            result = Math.max(dfs(matrix, i, j, visited), result);   
        }
    }

    return result;
};

var dfs = function(matrix, i, j, visited) {
    if (visited[i][j] !== 0) {
        return visited[i][j];
    }
    var length = 1;
    var row = matrix.length;
    var col = matrix[0].length;

    if (i - 1 >= 0 && matrix[i - 1][j] > matrix[i][j]) {
        length = Math.max(dfs(matrix, i - 1, j, visited) + 1, length);
    }

    if (i + 1 < row && matrix[i + 1][j] > matrix[i][j]) {
        length = Math.max(dfs(matrix, i + 1, j, visited) + 1, length);
    }

    if (j - 1 >= 0 && matrix[i][j - 1] > matrix[i][j]) {
        length = Math.max(dfs(matrix, i, j - 1, visited) + 1, length);
    }

    if (j + 1 < col && matrix[i][j + 1] > matrix[i][j]) {
        length = Math.max(dfs(matrix, i, j + 1, visited) + 1, length);
    }

    visited[i][j] = length;
    return length;
};
```
