# 13. Roman to Integer

---
## Description

> Given a roman numeral, convert it to an integer.

> Input is guaranteed to be within the range from 1 to 3999.

## Javascript

解法一：主要是判断是否要进位，当连续两个字符AB中，B代表的数字大于A，那么说明AB是一个组合数，否则的话依次累加即可。

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var l = s.length;
    var result = 0;
    var current, next, i = 0;
    while ( i < l ) {
        current = toNumber(s[i]);
        if(s[i+1] !== undefined) {
            next = toNumber(s[i+1]);
            if (next > current) {
                result += next - current;
                i += 2;
                continue;
            } 
        } 
        result += current;
        i++;
    }
    return result;
};

var toNumber = function (i) {
    switch (i) {
        case 'I' :
            return 1;
        case 'V' :
            return 5;
        case 'X' :
            return 10;
        case 'L' :
            return 50;
        case 'C' :
            return 100;
        case 'D' :
            return 500;
        case 'M' :
            return 1000;
        default:
            return 0;
    }
}
```

## Java

解法二：

```
用作数字的罗马字母共有七个，即I(1),V(5),X(10),L(50),C(100),D(500),M(1000).

罗马字母记数有以下四条规则：

1.相同的数字连写，所表示的数等于这些数相加。如：XXX = 30，CC = 200。

2.如果大的数字在前，小的数字在后，所表示的数等于这些数相加。如：VIII = 8，LX = 60。

3.如果小的数字在前，大的数字在后，所表示的数等于从大数减去小数。如：IX = 9，XC = 90，CM = 900。

4.如果数字上面有一横线，表示这个数字增值1000倍。
```

```java
public class Solution {
    public int romanToInt(String s) {
        int result = 0;
        result += getNum(s.charAt(0));
        for (int i = 1; i < s.length(); i++) {
            int cur = getNum(s.charAt(i));
            int pre = getNum(s.charAt(i - 1));
            if (cur > pre) {
                result = result - pre + cur - pre;
            } else {
                result += cur;
            }
        }
        return result;
    }
    
    public int getNum(char ch) {
        switch(ch) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
        }
        return 0;
    }
}
```