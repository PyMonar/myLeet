# 241. Different Ways to Add Parentheses

---

## Description

> Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +, - and `*`.

```
Example 1
Input: "2-1-1".

((2-1)-1) = 0
(2-(1-1)) = 2
Output: [0, 2]


Example 2
Input: "2*3-4*5"

(2*(3-(4*5))) = -34
((2*3)-(4*5)) = -14
((2*(3-4))*5) = -10
(2*((3-4)*5)) = -10
(((2*3)-4)*5) = 10
Output: [-34, -14, -10, -10, 10]
```

## Javascript

```
/**
 * @param {string} input
 * @return {number[]}
 */

var diffWaysToCompute = function(input) {
    var result = [];

    for (var s = 0; s < input.length; s++) {
        if (input[s] === '+' || input[s] === '-' || input[s] === '*') {
            var left = diffWaysToCompute(input.slice(0, s));
            var right = diffWaysToCompute(input.slice(s + 1));

            for (var m = 0; m < left.length; m++) {
                for (var n = 0; n < right.length; n++) {
                    result.push(cal(left[m], right[n], input[s]));
                }
            }
        }
    }
    if (result.length === 0) {
        result.push(input - 0);
    }
    return result;
};


var cal = function(a, b, oper) {
    a = a - 0;
    b = b - 0;
    switch (oper) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
    }
};
```
