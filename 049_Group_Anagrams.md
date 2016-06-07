# 49. Group Anagrams

---

## Description

> Given an array of strings, group anagrams together.

> For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
> Return:

```
[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

## Javascript


```
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var dic = {};
    for (var i = 0; i < strs.length; i++) {
        var key = getSort(strs[i]);
        if (dic[key]) {
            dic[key].push(strs[i]);
        } else {
            dic[key] = [];
            dic[key].push(strs[i]);
        }
    }

    var result = [];
    for (var item in dic) {
        result.push(dic[item]);
    }

    return result;
};

var getSort = function (str) {
    var arr = str.split('');
    arr.sort(function (a, b) {
        return a > b;
    });
    return arr.join('');
};
```
