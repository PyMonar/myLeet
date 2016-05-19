# 279. Perfect Squares

---

## Description

> Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

> For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

## Javascript


```
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {

    var result = [];
    result.push(0);
    result.push(1);
    var i, j;
    for (i = 2; i <= n; i++) {

        result[i] = i;
        for (j = 1; j * j <= i; j++) {
            if ( j * j === i) {
                result[i] = 1;
                break;
            }

            var temp = result[i - j * j] + 1;
            result[i] = result[i] > temp ? temp : result[i] ;
        }
    }

    return result[n];
};
```
