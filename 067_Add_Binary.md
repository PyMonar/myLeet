# 67. Add Binary

---

## Description

> Given two binary strings, return their sum (also a binary string).

> For example,
> a = "11"
> b = "1"
> Return "100".

## Javascript

```
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var num1 = a.split('').reverse();
    var num2 = b.split('').reverse();
    var r = 0;
    var result = [];

    var i = 0,
        j = 0;
    var l1 = num1.length;
    var l2 = num2.length;
    var n1, n2, sum;
    while (i < l1 && j < l2) {
        sum = 0;
        n1 = num1[i] - 0;
        n2 = num2[j] - 0;
        sum = n1 + n2 + r;

        if (sum <= 1) {
            result.push(sum);
            r = 0;
        } else {
            result.push(sum - 2);
            r = 1;
        }

        i++;
        j++;
    }

    if (l2 > l1) {
        while (j < l2) {
            sum = 0;
            n2 = num2[j] - 0;
            sum = n2 + r;
            if (sum <= 1) {
                result.push(sum);
                r = 0;
            } else {
                result.push(sum - 2);
                r = 1;
            }
            j++;
        }
    } else {
        while (i < l1) {
            sum = 0;
            n1 = num1[i] - 0;
            sum = n1 + r;
            if (sum <= 1) {
                result.push(sum);
                r = 0;
            } else {
                result.push(sum - 2);
                r = 1;
            }
            i++;
        }
    }

    if (r === 1) {
        result.push(1);
    }

    return result.reverse().join('');
};
```
