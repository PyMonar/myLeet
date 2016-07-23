/**
 * @param {number} n
 * @return {number}
 */
var result;
var totalNQueens = function(n) {
    if (n === 0) {
        return 0;
    }
    result = 0;

    var matrix = [];
    var i, j;
    for (i = 0; i < n; i++) {
        var item = [];
        for (j = 0; j < n; j++) {
            item.push(true);
        }
        matrix.push(item);
    }

    solution(matrix, 0);

    return result;

};

var solution = function (matrix, row) {
    if (row === matrix.length) {
        result ++;
        log(matrix);
        return;
    }

    if (canPut(matrix[row])) {
        for (var i = 0; i < matrix.length; i++) {
            if (matrix[row][i]) {
                var temp = copy(matrix);
                set(temp, row, i);
                solution(temp, row + 1);
                
            }
        }
    }
};

var set = function (matrix, row, col) {
    var i, j;
    var left = col, right = col;
    for (i = row + 1; i < matrix.length; i ++) {
        matrix[i][col] = false;

        left--;
        right++;
        if (left >= 0) {
            matrix[i][left] = false;
        }

        if (right < matrix.length) {
            matrix[i][right] = false;
        }
    }
    
};

var copy = function (matrix) {
    var i, j;
    var result = [];
    for (i = 0; i < matrix.length; i++) {
        result.push(matrix[i].slice());
    }
    return result;
};

var canPut = function (row) {
    return row.indexOf(true) !== -1;
};


var log = function(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        var item = '';
        for (var j = 0; j < matrix.length; j++) {
            item += matrix[i] ? '1 ' : '0 ';
        }
        console.log(item);
    }
}

console.log(totalNQueens(5));