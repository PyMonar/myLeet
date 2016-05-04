# 122. Best Time to Buy and Sell Stock II

---

## Description

> Say you have an array for which the ith element is the price of a given stock on day i.

> Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

## Javascript

```
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
     if (prices.length === 0) {
         return 0;
     }
     var profit = 0;
     var max = 0;
     var buy = prices[0], sell = prices[0];
     var l = prices.length, i;
     for (i = 1; i < l; i++) {
         if (prices[i] < prices[i - 1]) {
             buy = prices[i];
             if (profit !== 0) {
                 max += profit;
                 profit = 0;
             }
         }

         if (prices[i] > prices[i - 1]) {
             sell = prices[i];
             if (sell > buy) {
                 var temp = sell - buy;
                 profit = profit < temp ? temp : profit;
             }
         }
     }

     if (profit !== 0) {
         max += profit;
     }

     return max;
};
```
