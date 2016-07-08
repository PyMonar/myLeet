# 79. Word Search

---

## Description

> Given a 2D board and a word, find if the word exists in the grid.
> The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

> For example,
> Given board = 

```
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
```

> word = "ABCCED", -> returns true,

> word = "SEE", -> returns true,

> word = "ABCB", -> returns false.




## Javascript

```
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function exist(board, word) {
    if (board.length === 0) {
        return false;
    }
    var m = board.length;
    var n = board[0].length;

    var bits = [];
    for (var i = 0; i < m; i++) {
        var item = [];
        for (var j = 0; j < n; j++) {
            item.push(0);
        }
        bits.push(item);
    }

    for (var _i = 0; _i < m; _i++) {
        for (var _j = 0; _j < n; _j++) {
            if (board[_i][_j] === word[0]) {
                if(dfs(_i, _j, board, bits, word, 0)){
                    return true;
                }
            }
        }
    }
    return false;
};

var dfs = function dfs(x, y, board, bits, word, index) {
    if (index === word.length) {
        return true;
    }
    if (x < 0 || y < 0 || x > board.length - 1 || y > board[0].length - 1) {
        return false;
    }
    if (board[x][y] === word[index] && bits[x][y] === 0) {
        bits[x][y] = 1;
        if (dfs(x, y - 1, board, bits, word, index + 1)) {
            return true;
        }
        if (dfs(x - 1, y, board, bits, word, index + 1)) {
            return true;
        }
        if (dfs(x + 1, y, board, bits, word, index + 1)) {
            return true;
        }
        if (dfs(x, y + 1, board, bits, word, index + 1)) {
            return true;
        }
        bits[x][y] = 0;
    }
    return false;
};
```
