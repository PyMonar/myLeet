# 12. Integer to Roman

---

## Description

> Given an integer, convert it to a roman numeral.

> Input is guaranteed to be within the range from 1 to 3999.

## Javascript

```
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var arr = num.toString().split('').reverse();
    var str = [];
    for (var i = 0; i < arr.length; i++) {
        str.unshift(bit(i, arr[i] - 0));
    }

    return str.join('');
};

var bit = function (b, v) {
    var str = '';
    var i;
    switch (b) {
        case 0:
            if (v < 4) {
                for (i = 0; i < v; i++) {
                    str += 'I';
                }
            } else if (v === 4) {
                str += 'IV';
            } else if (v > 4 && v < 9) {
                str += 'V';
                for (i = 5; i < v; i++) {
                    str += 'I';
                }
            } else {
                str += 'IX';
            }
            return str;
        case 1 :
            if (v < 4) {
                for (i = 0; i < v; i++) {
                    str += 'X';
                }
            } else if (v === 4) {
                str += 'XL';
            } else if (v > 4 && v < 9) {
                str += 'L';
                for (i = 5; i < v; i++) {
                    str += 'X';
                }
            } else {
                str += 'XC';
            }
            return str;
        case 2 :
            if (v < 4) {
                for (i = 0; i < v; i++) {
                    str += 'C';
                }
            } else if (v === 4) {
                str += 'CD';
            } else if (v > 4 && v < 9) {
                str += 'D';
                for (i = 5; i < v; i++) {
                    str += 'C';
                }
            } else {
                str += 'CM';
            }
            return str;
        case 3 :
            for (i = 0; i < v; i++) {
                str += 'M';
            }
            return str;
    }
};
```
