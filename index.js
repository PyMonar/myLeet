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

var board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

console.log(solveSudoku(board));