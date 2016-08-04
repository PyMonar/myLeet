# 72. Edit Distance

---

## Description

> Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)

> You have the following 3 operations permitted on a word:

 - a) Insert a character

 - b) Delete a character

 - c) Replace a character



## Javascript

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var dp = [];
    var i, j;
    var row = word1.length, col = word2.length;
    for (i = 0; i <= row; i++) {
        dp.push([]);
        for (j = 0; j <= col; j++) {
            if (i === 0) {
                dp[i].push(j);
            } else if (j === 0) {
                dp[i].push(i);
            } else {
                dp[i].push(0);
            }
        }
    }

    for (i = 1; i <= row; i++) {
        for (j = 1; j <= col; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1] + 1, dp[i][j - 1] + 1, dp[i - 1][j] + 1);
            }
        }
    }

    return dp[row][col];
};
```
