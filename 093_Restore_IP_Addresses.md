# 93. Restore IP Addresses

---

## Description

> Given a string containing only digits, restore it by returning all possible valid IP address combinations.

> For example:
> Given "25525511135",

> return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)


## Javascript

```
/**
 * @param {string} s
 * @return {string[]}
 */
var result;
var restoreIpAddresses = function(s) {
    result = [];
    if (s.length < 4 || s.length > 12) {
        return [];
    }
    solution(0, 0, s, []);
    return result;
};

var solution = function (has, i, s, item) {
    if (has === 4) {
        if (i === s.length) {
            item.pop();
            result.push(item.join(''));
        }
        return;
    }

    var cur = s[i];
    if (cur === '0') {
        item.push(cur);
        item.push('.');
        solution(has + 1, i + 1, s, item.slice());
    } else {
        // 传一个数
        item.push(cur);
        item.push('.');
        solution(has + 1, i + 1, s, item.slice());
        // 传两个数
        item.pop();
        item.pop();
        i++;
        cur += s[i];
        item.push(cur);
        item.push('.');
        solution(has + 1, i + 1, s, item.slice());
        // 传三个数
        item.pop();
        item.pop();
        i++;
        cur += s[i];
        if (valid(cur)) {
            item.push(cur);
            item.push('.');
            solution(has + 1, i + 1, s, item.slice());
        }
    }
};

var valid = function (s) {
    s = s - 0;
    if (s <= 255 && s >= 0) {
        return true;
    } else {
        return false;
    }
};
```
