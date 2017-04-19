# 006. ZigZag Conversion

---

## Description

> The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
```
P   A   H   N
A P L S I I G
Y   I   R
```
> And then read line by line: "PAHNAPLSIIGYIR"
> Write the code that will take a string and make this conversion given a number of rows:
```
string convert(string text, int nRows);
```
> convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

## Javascript

> 思路：思路有点复杂......

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    var results = [],
        i, j;
    var l = s.length;
    for (i = 0; i < numRows; i++) {
        results.push([]);
    }

    var col = 0,
        row = 0,
        r = 0;
    var step = numRows - 1;
    i = 0;
    while (i < l) {
        if (row >= numRows) {
            row -= 2;
            col += 1;
        }
        if (col === step * r && row === 0) {
            for (j = 0; j < numRows; j++) {
                results[j][col] = s[i];
                row++;
                i++;
            }

            r++;
        } else {
            for (j = 0; j < numRows; j++) {
                if (j === row) {
                    results[j][col] = s[i];
                    i++;
                    row--;
                    col++;
                }
            }
        }
    }
    var result = '';
    for (i = 0; i < results.length; i++) {
        for (j = 0; j < results[i].length; j++) {
            if (results[i][j]) {
                result += results[i][j];
            }
        }
    }

    return result;

};
```
