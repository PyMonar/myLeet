# 224. Basic Calculator

---

## Description

> Implement a basic calculator to evaluate a simple expression string.

> The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces.

> You may assume that the given expression is always valid.

```
Some examples:

"1 + 1" = 2
" 2-1 + 2 " = 3
"(1+(4+5+2)-3)+(6+8)" = 23

```

> Note: Do not use the eval built-in library function.


## Javascript

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var oper = [];
    var nums = [];
    var i = 0;
    var num1, num2, op, result;

    while (i < s.length) {
        if (s[i] === ' ') {
            i++;
        } else if (s[i] === '(' || s[i] === '+' || s[i] === '-') {
            oper.push(s[i]);
            i++;
        } else if (s[i] === ')') {
            i++;
            oper.pop();

            if (oper.length !== 0 && (oper[oper.length - 1] === '+' || oper[oper.length - 1] === '-')) {
                num2 = nums.pop();
                num1 = nums.pop();
                op = oper.pop();
                result = getResult(num1, num2, op);
                nums.push(result);
            }
        } else {
            num1 = getNum(s, i);
            nums.push(num1 - 0);
            i += num1.length;

            if (oper.length !== 0 && (oper[oper.length - 1] === '+' || oper[oper.length - 1] === '-')) {
                num2 = nums.pop();
                num1 = nums.pop();
                op = oper.pop();
                result = getResult(num1, num2, op);
                nums.push(result);
            }
        }
    }

    return nums.pop();
};

var getResult = function (num1, num2, oper) {
    if (oper === '+') {
        return num1 + num2;
    } else {
        return num1 - num2;
    }
};

var getNum = function (s, i) {
    var numStr = '';
    while (i < s.length && s[i] !== ' ' && s[i] !== '+' && s[i] !== '-' && s[i] !== '(' && s[i] !== ')') {
        numStr += s[i];
        i++;
    }
    return numStr;
};
```
