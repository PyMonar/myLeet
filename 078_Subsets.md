# 78. Subsets

---

## Description

> Given a set of distinct integers, nums, return all possible subsets.

> Note:
> Elements in a subset must be in non-descending order.
> The solution set must not contain duplicate subsets.
> For example,
> If nums = [1,2,3], a solution is:

```
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

## Javascript

```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var result;
var subsets = function(nums) {
    result = [];
    solution(nums, 0, []);
    return result;
};

var solution = function (nums, i, sub) {
    if (i === nums.length) {
        sub.sort(function (a, b) {return a - b});
        result.push(sub);
        return;
    }

    solution(nums, i + 1, sub.slice());
    sub.push(nums[i]);
    solution(nums, i + 1, sub.slice());
};
```
