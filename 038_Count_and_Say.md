# 38. Count and Say

---

## Description

> The count-and-say sequence is the sequence of integers beginning as follows:
> 1, 11, 21, 1211, 111221, ...

> 1 is read off as "one 1" or 11.
> 11 is read off as "two 1s" or 21.
> 21 is read off as "one 2, then one 1" or 1211.
> Given an integer n, generate the nth sequence.

> Note: The sequence of integers will be represented as a string.

## Javascript

```
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var arr = [];
    arr.push('0');
    arr.push('1');
    arr.push('11');
    var result, pre, key, time;
    for (var i = 3; i <= n; i++) {
        result = '';
        pre = arr[i - 1];
        key = pre[0];
        time = 1;
        for (var j = 1; j < pre.length; j++) {
            if (pre[j] !== key) {
                result += time + key;
                time = 1;
                key = pre[j];
            } else {
                time++;
            }
        }
        result += time + key;
        arr.push(result);
    }

    return arr[n];
};
```
