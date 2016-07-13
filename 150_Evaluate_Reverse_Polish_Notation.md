# 150. Evaluate Reverse Polish Notation

---

## Description

> Evaluate the value of an arithmetic expression in Reverse Polish Notation.
> Valid operators are +, -, *, /. Each operand may be an integer or another expression.

> Some examples:
```
["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
```



## Javascript

```
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [];
    var i;
    for (i = 0; i < tokens.length; i++) {
        if (isOp(tokens[i])) {
            var n1 = stack.pop() - 0;
            var n2 = stack.pop() - 0;
            stack.push(oper(n2, n1, tokens[i]) + '');
        } else {
            stack.push(tokens[i]);
        }
    }
    return stack[0] - 0;
};

var isOp = function (op) {
    if (op === '+' || op === '-' || op === '*' || op === '/') {
        return true;
    } else {
        return false;
    }
};

var oper = function (n1, n2, op) {
    switch(op) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            var r = n1 / n2;
            return r >= 0 ? Math.floor(r) : Math.ceil(r);
        default:
            return 0;
    }
};
```
