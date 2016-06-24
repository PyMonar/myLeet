# 306. Additive Number

---

## Description

> Additive number is a string whose digits can form additive sequence.
> A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.


> For example:
> "112358" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8.

```
1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
```

> "199100199" is also an additive number, the additive sequence is: 1, 99, 100, 199.

```
1 + 99 = 100, 99 + 100 = 199
```

> Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.
> Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.



## Javascript

```
/**
 * @param {string} num
 * @return {boolean}
 */
var flag;
var isAdditiveNumber = function(num) {
    flag = false;
    var first, second;
    var i, j;
    for (i = 0; i < num.length - 2; i++) {
        if (flag) {
            break;
        }
        first = num.slice(0, i + 1);
        if (first !== '0' && first.startsWith('0')) {
            break;
        }
        first = first - 0;
        for (j = i + 1; j < num.length - 1; j++) {
            if (flag) {
                break;
            }
            second = num.slice(i + 1, j + 1);
            if (second !== '0' && second.startsWith('0')) {
                break;
            }
            second = second - 0;
            solution(first, second, num.slice(j + 1));
        }
    }
    return flag;
};

var solution = function(first, second, remain) {
    if (remain === '') {
        flag = true;
        return;
    }

    var sum = (first + second) + '';
    if (remain.startsWith(sum)) {
        solution(second, sum - 0, remain.slice(sum.length));
    }
};
```
