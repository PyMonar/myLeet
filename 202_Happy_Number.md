# 202. Happy Number

---

## Description

> Write an algorithm to determine if a number is "happy".

> A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.


## Javascript

> 思路：涉及到无限循环的问题，推荐使用hash表，将循环之后的和存入hash，如果再次出现的话说明无限循环了。

```
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	if (n <= 0) {
		return false;
	}
	var notHappy = {};
	while (n !== 1) {
		if (notHappy[n] === undefined) {
			notHappy[n] = 1;
			n = calculate(n);
		} else {
			return false;
		}
	}
	return true;
};

var calculate = function (n) {
	var result = 0, cur;
	while (n >= 1) {
		cur = n % 10;
		result += cur * cur;
		n = (n - cur) / 10;
	} 
	return result;
}
```