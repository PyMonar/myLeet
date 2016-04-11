# 13. Roman to Integer

---
## Description

> Given a roman numeral, convert it to an integer.

> Input is guaranteed to be within the range from 1 to 3999.

## Javascript

> ˼·����Ҫ���ж��Ƿ�Ҫ��λ�������������ַ�AB�У�B��������ִ���A����ô˵��AB��һ�������������Ļ������ۼӼ��ɡ�

```
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