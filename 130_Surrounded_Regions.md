# 130. Surrounded Regions

---

## Description

> Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

> A region is captured by flipping all 'O's into 'X's in that surrounded region.

> For example,

```
X X X X
X O O X
X X O X
X O X X

```
> After running your function, the board should be:

```
X X X X
X X X X
X X X X
X O X X

```



## Javascript

```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length === 0) {
        return;
    }

    var m = board.length, n = board[0].length, i, j;
    
    var visited = [];
    for (i = 0; i < m; i++) {
        var row = [];
        for (j = 0; j < n; j++) {
            row.push(false);
        }
        visited.push(row);
    }

    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (board[i][j] === 'O' && !visited[i][j]) {
                bfs(board, visited, i, j);
            }
        }
    }
};

var bfs = function (board, visited, i, j) {
    var q = [], flag = false, index = 0;
    var m = board.length, n = board[0].length, item;
    q.push([i, j]);
    visited[i][j] = true;
    while (index < q.length) {
        item = q[index];
        var x = item[0], y = item[1];

        if (x === 0 || x === m - 1 || y === 0 || y === n - 1) {
            flag = true;
        }
        // 上
        if (x - 1 >= 0 && !visited[x - 1][y] && board[x - 1][y] === 'O') {
            q.push([x - 1, y]);
            visited[x - 1][y] = true;
        }
        // 下
        if (x + 1 < m && !visited[x + 1][y] && board[x + 1][y] === 'O') {
            q.push([x + 1, y]);
            visited[x + 1][y] = true;
        }
        // 左
        if (y - 1 >= 0 && !visited[x][y - 1] && board[x][y - 1] === 'O') {
            q.push([x, y - 1]);
            visited[x][y - 1] = true;
        }
        // 右
        if (y + 1 < n && !visited[x][y + 1] && board[x][y + 1] === 'O') {
            q.push([x, y + 1]);
            visited[x][y + 1] = true;
        }
        index++;
    }

    if (!flag) {
        // 翻转所有队列里边的'O'
        while (q.length !== 0) {
            item = q.pop();
            board[item[0]][item[1]] = 'X';
        }
    } 
};
```
