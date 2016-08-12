# 123. Best Time to Buy and Sell Stock III

---

## Description

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).



## Javascript

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0;
    var l = prices.length;
    if (l === 0) {
        return profit;
    }
    
    var i;
    var preProfit = [];
    var postProfit = [];
    for (i = 0; i < l; i++) {
        preProfit.push(0);
        postProfit.push(0);
    }

    var buy = prices[0];
    for (i = 1; i < l; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        }
        preProfit[i] = (prices[i] - buy) > preProfit[i - 1] ? prices[i] - buy : preProfit[i - 1];
    }

    buy = prices[l - 1];
    for (i = l - 2; i >= 0; i--) {
        if (prices[i] > buy) {
            buy = prices[i];
        }
        postProfit[i] = (buy - prices[i]) > postProfit[i + 1] ? buy - prices[i] : postProfit[i + 1];
    }

    for (i = 0; i < l; i++) {
        profit = Math.max(profit, preProfit[i] + postProfit[i]);
    }

    return profit;
};
```