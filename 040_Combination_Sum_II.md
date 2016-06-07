# 40. Combination Sum II

---

## Description

> Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

> Each number in C may only be used once in the combination.

> Note:
> All numbers (including target) will be positive integers.
> The solution set must not contain duplicate combinations.
> For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,

> A solution set is:

```
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```

## Javascript


```
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var result;
var combinationSum2 = function(candidates, target) {
    result = [];
    candidates.sort(function (a, b) {
        return a - b;
    });
    solution(candidates, 0, target, []);

    var final = [];
    for (var i = 0; i < result.length; i++) {
        var temp = [];
        result[i] = result[i].split(',');
        for (var j = 0; j < result[i].length; j++) {
            temp.push(result[i][j] - 0);
        }
        final.push(temp);
    }
    return final;
};

var solution = function (arr, i, target, items) {
    if (target === 0) {
        var str = items.join(',');
        if(result.indexOf(str) === -1) {
            result.push(str);   
        }
        return;
    }

    if (target < 0 || i >= arr.length) {
        return;
    }

    solution(arr, i + 1, target, items.slice());
    items.push(arr[i]);
    solution(arr, i + 1, target - arr[i], items.slice());
};
```
