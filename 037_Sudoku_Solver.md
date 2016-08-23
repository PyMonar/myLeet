# 37. Sudoku Solver

---

## Description

> Write a program to solve a Sudoku puzzle by filling the empty cells.

> Empty cells are indicated by the character '.'.

> You may assume that there will be only one unique solution.

## Javascript

```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var copy;
var solveSudoku = function(board) {
    copy = [];
    
    solve(0, 0, board);
    
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            board[i][j] = copy[i][j];
        }
    }
};

var solve = function (i, j, board) {
    if (i > 8) {
        for (i = 0; i < 9; i++) {
            copy.push(board[i].slice());
        }
        return;
    }

    if (board[i][j] !== '.') {
        i = j === 8 ? i + 1 : i;
        j = j === 8 ? 0 : j + 1;
        solve(i, j, board);
        return;
    }
    
    var row, col;
    for (var k = 1; k <= 9; k++) {
        if (check(i, j, board, k + '')) {
            board[i][j] = k + '';
            row = j === 8 ? i + 1 : i;
            col = j === 8 ? 0 : j + 1;
            solve(row, col, board);
            board[i][j] = '.';
        }
    }
};

var check = function (row, col, board, val) {
    var i, j;
    for (i = 0; i < board.length; i++) {
        if (i === col) {
            continue;
        }
        if (board[row][i] === val) {
            return false;
        }
    }

    for (i = 0; i < board.length; i++) {
        if (i === row) {
            continue;
        }
        if (board[i][col] === val) {
            return false;
        }
    }

    var item = getUnit(row, col);
    var s = item[0], e = item[1];
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (i === row && j === col) {
                continue;
            }

            if (board[i + s][j + e] === val) {
                return false;
            }
        }
    }

    return true;
};

var getUnit = function (row, col) {
    var s, e;
    if (row <= 2) {
        s = 0;
    } else if (row <= 5) {
        s = 3;
    } else {
        s = 6;
    }

    if (col <= 2) {
        e = 0;
    } else if (col <= 5) {
        e = 3;
    } else {
        e = 6;
    }

    return [s, e];
};
```

## Python

```python
class Solution(object):
    def solveSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: void Do not return anything, modify board in-place instead.
        """
        copy = []

        self.solve(0, 0, board, copy)

        for i in range(9):
            for j in range(9):
                board[i][j] = copy[i][j]
        print board
        
    def solve(self, row, col, board, copy):
        if row > 8:
            for i in range(9):
                copy.append(board[i][:])
            return
        if board[row][col] != '.':
            row = row + 1 if col == 8 else row
            col = 0 if col == 8 else col + 1
            self.solve(row, col, board, copy)
            return
        for i in range(1, 10):
            if self.check(row, col, str(i), board):
                board[row][col] = str(i)
                x = row + 1 if col == 8 else row
                y = 0 if col == 8 else col + 1
                self.solve(x, y, board, copy)
                board[row][col] = '.'
        
    def check(self, row, col, val, board):
        for i in range(9):
            if i == col:
                continue
            if board[row][i] == val:
                return False
        for i in range(9):
            if i == row:
                continue
            if board[i][col] == val:
                return False
        s, e = self.getUnit(row, col)
        for i in range(3):
            for j in range(3):
                if i == row and j == col:
                    continue
                if board[i + s][j + e] == val:
                    return False
        return True

    def getUnit(self, row, col):
        if row <= 2:
            s = 0
        elif row <= 5:
            s = 3
        else:
            s = 6
        if col <= 2:
            e = 0
        elif col <= 5:
            e = 3
        else:
            e = 6
        return s, e
```
