# 46. Permutations

---

## Description

> Given a collection of distinct numbers, return all possible permutations.

> For example,
> [1,2,3] have the following permutations:
> [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].

## Javascript

```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var results;
var permute = function(nums) {
    results = [];
    solution([], nums.concat());
    return results;
};

var solution = function (a, b) {
    if (b.length === 1) {
        a.push(b[0]);
        results.push(a);
        return;
    }

    for (var i = 0; i < b.length; i++) {
        var pre = a.concat();
        pre.push(b[i]);
        var after = b.concat();

        after.splice(i, 1);
        solution(pre, after);
    }
};
```
