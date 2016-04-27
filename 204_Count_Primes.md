# 204. Count Primes

---

## Description

> Count the number of prime numbers less than a non-negative number, n.

## Javascript

> 思路：开一个数组，用于存储某一个数字是否为素数。默认全是1。从2开始循环，将所有其倍数都置为0，这样循环到n，留下来为1的即为素数。

```
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var result = [];
    var i;
    for (i = 0; i <= n; i++) {
        result.push(1);
    }

    var rat;
    for (i = 2; i <= n; i++) {
        // 已经为合数的直接跳过
        if (result[i] === 0){
            continue;
        }
        rat = 2;
        while (i * rat <= n) {
            result[i * rat] = 0;
            rat++;
        }
    }

    result[0] = 0;
    result[1] = 0;
    var num = 0;
    for (i = 0; i < n; i++) {
        num += result[i];
    }
    return num;
};
```
