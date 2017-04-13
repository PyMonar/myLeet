# 38. Count and Say

---

## Description

> The count-and-say sequence is the sequence of integers beginning as follows:
> 1, 11, 21, 1211, 111221, ...

> 1 is read off as "one 1" or 11.
> 11 is read off as "two 1s" or 21.
> 21 is read off as "one 2, then one 1" or 1211.
> Given an integer n, generate the nth sequence.

> Note: The sequence of integers will be represented as a string.

## Javascript

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var arr = [];
    arr.push('0');
    arr.push('1');
    arr.push('11');
    var result, pre, key, time;
    for (var i = 3; i <= n; i++) {
        result = '';
        pre = arr[i - 1];
        key = pre[0];
        time = 1;
        for (var j = 1; j < pre.length; j++) {
            if (pre[j] !== key) {
                result += time + key;
                time = 1;
                key = pre[j];
            } else {
                time++;
            }
        }
        result += time + key;
        arr.push(result);
    }

    return arr[n];
};
```

## Java

```java
public class Solution {
    public String countAndSay(int n) {
        String res = "1", tmp;
        int digit, count;
        while (n > 1) {
            tmp = res;
            digit = tmp.charAt(0) - '0';
            count = 1;
            res = "";
            for (int i = 1; i < tmp.length(); i++) {
                if (tmp.charAt(i) != tmp.charAt(i - 1)) {
                    res += count + "" + digit;
                    digit = tmp.charAt(i) - '0';
                    count = 1;
                } else {
                    count++;
                }
            }
            res += count + "" + digit;
            n--;
        }
        return res;
    }
}
```