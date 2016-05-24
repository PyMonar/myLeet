# 201. Bitwise AND of Numbers Range

---

## Description

> Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

> For example, given the range [5, 7], you should return 4.

## Javascript

```
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var bit = 0;
    while(m !== n) {
        m >>= 1;
        n >>= 1;
        bit++;
    }

    return m << bit;
};
```
