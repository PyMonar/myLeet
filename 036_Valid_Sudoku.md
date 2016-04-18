# 36. Valid Sudoku

---

## Description

> Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

> The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

## Javascript

```
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var valid = true;
    var l = board.length;
    var i, k;
    // row
    for (i = 0; i < l; i++) {
        if (!isValid(board[i])) {
            return false;
        }
    }
    //col
    var col;
    for (i = 0; i < l; i++) {
        col = [];
        for (k = 0; k < l ; k++) {
            col.push(board[k][i]);
        }
        if (!isValid(col)) {
            return false;
        }
    }

    //unit
    var unit;
    for (var m = 0; m <9; m += 3) {
        for (var n = 0; n < 9; n += 3) {
            unit = [];
            for (i = m; i < m + 3; i++) {
                for (k = n; k < n + 3 ; k++) {
                    unit.push(board[i][k]);
                }
            }
            if (!isValid(unit)) {
                return false;
            }
        }
    }

    return true;
};

var isValid = function (arr) {
    var dic = {};
    var l = arr.length;
    for (var i = 0; i < l; i++ ) {
        if (arr[i] !== '.' && dic[arr[i]] !== undefined) {
            return false;
        } else {
            dic[arr[i]] = 1;
        }
    }
    return true;
}
```
