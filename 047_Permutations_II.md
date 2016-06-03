# 47. Permutations II

---

## Description

> Given a collection of numbers that might contain duplicates, return all possible unique permutations.

> For example,
> [1,1,2] have the following unique permutations:
> [1,1,2], [1,2,1], and [2,1,1].

## Javascript


```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var results;
var permuteUnique = function(nums) {
    if (nums.length === 0) {
        return [];
    }

    results = [];
    solution(nums.slice(), []);
    return results;
};

var solution = function (nums, item) {
    if (nums.length === 1) {
        item.push(nums[0]);
        results.push(item);
        return;
    }

    var dic = {};
    for (var i = 0; i < nums.length; i++) {
        var temp = nums.slice();
        var itemTemp = item.slice();
        if (dic[nums[i]]) {
            continue;
        } else {
            dic[nums[i]] = true;
            temp.splice(i, 1);
            itemTemp.push(nums[i]);
            solution(temp, itemTemp);
        }
    }
};
```
