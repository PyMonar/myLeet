# 90. Subsets II

---

## Description

> Given a collection of integers that might contain duplicates, nums, return all possible subsets.

> Note:
> Elements in a subset must be in non-descending order.
> The solution set must not contain duplicate subsets.
> For example,
> If nums = [1,2,2], a solution is:

```
[
  [2],
  [1],
  [1,2,2],
  [2,2],
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

var subsetsWithDup = function(nums) {
    result = [];
    solution(nums, 0, []);
    var dic = {};
    for (var i = 0; i < result.length; i++) {
        var str = result[i].toString();
        if (dic[str]) {
            result.splice(i, 1);
            i--;
        } else {
            dic[str] = 1;
        }
    }
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
