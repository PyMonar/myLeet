# 338. Counting Bits

---

## Description

> Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

> Example:
> For num = 5 you should return [0,1,1,2,1,2].

## Javascript


```
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    // 存储结果
    var result = [];
    // 存储前一个数字的二进制数组
    var cur = [];

    result.push(0);
    cur.push(0);

    var i = 1, rat, p;
    while (i <= num) {
        p = 0;
        rat = 1;
        // 根据前一个数字的二进制数组，构造当前数字的二进制数组
        while (p !== cur.length && rat !== 0) {
            cur[p] += rat;
            if (cur[p] > 1) {
                cur[p] = 0;
                rat = 1;
            } else {
                rat = 0;
            }

            p++;
        }

        if (p === cur.length && rat !== 0) {
            cur.push(rat);
        }

        var sum = 0;
        p = 0;
        // 将当前二进制数组中的1总和放进result
        while (p !== cur.length) {
            sum += cur[p];
            p++;
        }

        result.push(sum);
        i++;

    }

    return result;
};
```
