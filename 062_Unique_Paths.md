# 62. Unique Paths

---

## Description

> A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

> The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

> How many possible unique paths are there?

## Javascript


```
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
   var results = [];
   var i , j;
   for (i = 0; i < m; i ++) {
       results.push([]);
       for (j = 0; j < n; j++) {
           if (i === 0) {
               results[i].push(1);
           } else {
               results[i].push(0);
           }

           if (j === 0) {
               results[i][j] = 1;
           }
       }
   }

   for (i = 1; i < m ; i ++) {
       for (j = 1; j < n; j ++) {
           results[i][j] = results[i - 1][j] + results[i][j - 1];
       }
   }

   return results[m-1][n-1];
};
```
