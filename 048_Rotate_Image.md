# 48. Rotate Image

---

## Description

> You are given an n x n 2D matrix representing an image.

> Rotate the image by 90 degrees (clockwise).

## Javascript

```
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var cache = [];

    var i, j, l = matrix.length - 1;

    for (i = 0; i <= l; i++) {
        cache.push(matrix[i].concat());
    }

    for (i = 0; i <= l; i++) {
        for (j = 0; j <= l; j++) {
            console.log(cache[l - j][i]);
            matrix[i][j] = cache[l - j][i];
        }
    }
};
```
