# 322. Coin Change

---

## Description

> You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

> Example 1:
> coins = [1, 2, 5], amount = 11
> return 3 (11 = 5 + 5 + 1)

> Example 2:
> coins = [2], amount = 3
> return -1.

> Note:
> You may assume that you have an infinite number of each kind of coin.


## Javascript

```
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var result = [];
    if (coins.length === 0) {
        return -1;
    }

    if (amount <= 0) {
        return 0;
    }

    var i, j;
    for (i = 0; i <= amount; i++) {
        result.push(i + 1);
    }

    for (i = 0; i < coins.length; i++) {
        result[coins[i]] = 1;
    }

    for (i = 1; i <= amount; i++) {
        for (j = 0; j < coins.length; j++) {
            if (coins[j] < i) {
                var diff = i - coins[j];
                if (result[diff] !== diff + 1) {
                    result[i] = result[i] < ( result[diff] + 1 ) ? result[i] : result[diff] + 1;
                }   
            }
        }
    }

    return result[amount] === amount + 1 ? -1 : result[amount];
};
```
