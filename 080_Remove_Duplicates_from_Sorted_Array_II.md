# 80. Remove Duplicates from Sorted Array II

---

## Description

> Follow up for "Remove Duplicates":
> What if duplicates are allowed at most twice?

> For example,
> Given sorted array nums = [1,1,1,2,2,3],

> Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.

## Javascript


```
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var dic = {};
    for (var i = 0; i < nums.length; i++) {
        if (dic[nums[i]]) {
            if (dic[nums[i]] === 2) {
                nums.splice(i, 1);
                i--;
            } else {
                dic[nums[i]] ++;   
            }
        } else {
            dic[nums[i]] = 1;
        }
    }

    var result = 0;
    for (var key in dic) {
        result += dic[key];
    }

    return result;
};
```
