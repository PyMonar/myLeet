# 121. Best Time to Buy and Sell Stock

---

## Description

> Say you have an array for which the i element is the price of a given stock on day i.

> If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

## Javascript

> 思路：可以两层循环暴力法，不过时间超限。这里使用两根指针，一个买一个卖来跟踪，当买的更小时买指针更新，当卖的更大时卖指针和利润更新，卖指针永远大于买指针，这样扫描一遍表即可。

```
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max = 0;
    var l = prices.length;
    var buy = prices[0],
        sell = prices[0],
        prof;
    for (var i = 0; i < l; i++) {
        if (prices[i] <= buy) {
            buy = prices[i];
        } else {
            sell = prices[i];
            if (sell - buy >= max) {
                max = sell - buy;
                sell = prices[i];
            }
        }
    }
    return max;
};
```
