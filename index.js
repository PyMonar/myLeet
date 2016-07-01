/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length === 0) {
        return 0;
    }



    var i, j;
    var m = matrix.length;
    var n = matrix[0].length;
    var max = 0;
    for (i = 0; i < m; i++) {
        matrix[i] = matrix[i].split('');
    }
    
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            matrix[i][j] -= 0;
            if (matrix[i][j] === 0) {
                continue;
            }

            if (i !== 0 && j !== 0) {
                helper(i, j, matrix);
            }

            max = max > matrix[i][j] ? max : matrix[i][j];
        }
    }

    return max;
};

var helper = function(x, y, matrix) {
    if (matrix[x - 1][y - 1] === 0) {
        return;
    }
    var step = Math.sqrt(matrix[x - 1][y - 1]);
    for (var i = 1; i <= step; i++) {
        if ((matrix[x - i][y] && matrix[x][y - i])) {
            var l = Math.sqrt(matrix[x][y]) + 1;
            matrix[x][y] = l * l;
        } else {
            return;
        }
    }
};

console.log(maximalSquare(["0001","1101","1111","0111","0111"]));