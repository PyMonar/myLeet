# 233. Number of Digit One

---

## Description

Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

For example: 

Given n = 13,

Return 6, because digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.

## Solution

以24071为例，如果我们想计算百位上1出现的次数，具体思路如下：

获取百位的高位为24，获取百位的低位为71，当前百位数字为0。

从高位出发来分析，百位出现的次数有：00100~00199,01100~01199,02100~02199,…,23100~23199。总共有(24*100)个1出现。

这是百位为0的情况，如果百位为1的时候，那除了上述的(24 * 100)个1之外，还包括：24100～24171，共(71 + 1)个1，即总共：24 * 100 + 71 + 1。

如果百位大于1例如为6的时候，那除了最开始的(24 * 100)个1之外，还包括了：24100~24199，共100个1，即总共：(24 + 1)*100。

总结规律

其实通过上面的分析，我们就可以归纳出一个规律如下。

要求第i位1出现的次数，并且i的高位数为highN，低位数为lowN，当前第i位的数字为cdigit，则当前i位1出现的次数分三种情况：

```
cdigit == 0, count = highN * factor.

cdigit == 1, count = highN * factor + lowN + 1.

cdigit > 1, count = (highN + 1) * factor.
```
其中，factor为当前的乘积因子，例如百位的factor为100，十位的乘积因子为10。

## Javascript

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    var result = 0;
    var factor = 1;
    var highN, lowN, cdigit;
    while (factor <= n) {
        lowN = n % factor;
        cdigit = Math.floor((n % (factor * 10) - lowN) / factor);
        highN = Math.floor((n - n % (factor * 10)) / (factor * 10));

        if (cdigit === 0) {
            result += highN * factor;
        } else if (cdigit === 1) {
            result += highN * factor + lowN + 1;
        } else {
            result += (highN + 1) * factor;
        }
        factor *= 10;
    }
    return result;
};
```