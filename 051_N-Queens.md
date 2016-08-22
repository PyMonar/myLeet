# 51. N-Queens

---

## Description

> The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

> Given an integer n, return all distinct solutions to the n-queens puzzle.

> Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

> For example, There exist two distinct solutions to the 4-queens puzzle:

```
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
```


## Javascript

```javascript
/**
 * @param {number} n
 * @return {string[][]}
 */
var result;
var points;
var stack;
var solveNQueens = function(n) {
    if (n === 0) {
        return [];
    }

    result = [];
    points = [];
    stack = [];
    var matrix = [];
    var i, j;
    for (i = 0; i < n; i++) {
        matrix.push([]);
        for (j = 0; j < n; j++) {
            matrix[i][j] = '0';
        }
    }

    solution(matrix, 0);

    return result;
};

var solution = function (matrix, row) {
    if (row === matrix.length) {
        getSolution(matrix.length);
        return;
    }

    if (!hasPlace(matrix, row)) {
        return;
    }

    for (var i = 0; i < matrix.length; i++) {
        if (matrix[row][i] === '0') {
            // set points
            points.push([row, i]);
            // set matrix and stack
            var point_num = setMatrix(matrix, row, i);
            
            solution(matrix, row + 1);
            
            // remove points
            points.pop();
            // reset matrix and stack 
            resetMatrix(matrix, point_num);
        }
    }
};

var setMatrix = function (matrix, row, col) {
    var j, nums = 0;
    for (j = 0; j < matrix.length; j++) {
        if (matrix[row][j] === '0') {
            matrix[row][j] = '1';
            stack.push([row, j]);
            nums++;
        }
    }

    for (j = row + 1; j < matrix.length; j++) {
        if (matrix[j][col] === '0') {
            matrix[j][col] = '1';
            stack.push([j, col]);
            nums++;
        }
    }

    var left = col - 1, right = col + 1;
    for (j = row + 1; j < matrix.length; j++) {
        if (left >= 0 && matrix[j][left] === '0') {
            matrix[j][left] = '1';
            stack.push([j, left]);
            nums++;
        }

        if (right < matrix.length && matrix[j][right] === '0') {
            matrix[j][right] = '1';
            stack.push([j, right]);
            nums++;
        }
        left--;
        right++;
    }

    return nums;
};

var resetMatrix = function (matrix, nums) {
    while (nums > 0) {
        var point = stack.pop();
        matrix[point[0]][point[1]] = '0';
        nums --;
    }
};

var getSolution = function (n) {
    var solve = [], row;
    for (var i = 0; i < points.length; i++) {
        row = [];
        for (var j = 0; j < n; j++) {
            row.push('.');
        }
        row[points[i][1]] = 'Q';
        solve.push(row.join(''));
    }
    result.push(solve);
};

var hasPlace = function (matrix, row) {
    for (var i = 0; i < matrix.length; i++) {
        if (matrix[row][i] === '0') {
            return true;
        }
    }
    return false;
};
```