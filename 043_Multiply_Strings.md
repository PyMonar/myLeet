# 43. Multiply Strings

---

## Description

> Given two numbers represented as strings, return multiplication of the numbers as a string.

```
Note:

The numbers can be arbitrarily large and are non-negative.
Converting the input string to integer is NOT allowed.
You should NOT use internal library such as BigInteger.

```

## Javascript

```
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 - 0 === 0 || num2 - 0 === 0) {
        return '0';
    }
    
    var result = [];
    var l1 = num1.length, l2 = num2.length;
    
    var i, j;
    //xr 为乘法进位， jr为加法进位
    var xr, jr;
    
    // 初始化结果数组
    for (i = 0; i < l1 * l2 + 1; i++) {
        result.push(0);
    }
    
    // 逐位循环
    for (i = l1 - 1; i >= 0 ; i--) {
        var n1 = num1[i] - 0;
        // 插入结果的起始位置
        var start = l1 - 1 - i;
        
        xr = 0;
        for (j = l2 - 1; j >=0; j--) {
            var n2 = num2[j] - 0;
            // x表示两数相乘结果
            var x = n1 * n2 + xr;
            // m 表示余数
            var m = x % 10;
            
            xr = Math.floor(x / 10);
            // 存结果
            result[start] += m;
            
            // 存下结果后需要考虑加法的进位
            if (result[start] >= 10) {
                result[start] -= 10;
                // 加法进位如果有不会超过1，所以这里直接赋值1
                jr = 1;
                // jsstart表示如果加法进位的话对进位到哪一位进行跟踪，起始从start + 1开始
                var jStart = start + 1;
                while (jr !== 0) {
                    result[jStart] += jr;
                    if (result[jStart] >= 10) {
                        result[jStart] -= 10;
                        jr = 1;
                        jStart++;
                    } else {
                        break;
                    }
                }
            }
            
            start++;
        }
        // 关键，如果一轮下来乘法进位还存在，则直接存入，不需考虑再进位，因为一轮下来永远是最高位置
        if (xr !== 0) {
            result[start] += xr;
        }
    }
    // zeroStart表示最高非0位
    var zeroStart;    
    for (i = result.length - 1; i >= 0; i--) {
        if (result[i] !== 0) {
            zeroStart = i;
            break;
        }
    }
    
    // 处理结果
    result = result.slice(0, i + 1);

    return result.reverse().join('');
};
```
