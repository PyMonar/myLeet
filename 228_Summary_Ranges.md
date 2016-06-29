# 228. Summary Ranges

---

## Description

> Given a sorted integer array without duplicates, return the summary of its ranges.
> For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].

## Javascript

```
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var result = [];
    if (nums.length === 0) {
        return result;
    }

    var s = 0, e, i, temp;
    var l = nums.length;
    while (s < l) {
        e = s + 1;

        temp = 1;
        while (nums[e] === nums[s] + temp && e < l) {
            e++;
            temp++;
        }

        if (e === l) {
            if (s === e - 1) {
                result.push(nums[s] + '');
            } else {
                result.push(nums[s] + '->' + nums[e - 1]);   
            }
            break;
        } else {
            if (s === e - 1) {
                result.push(nums[s] + '');
            } else {
                result.push(nums[s] + '->' + nums[e - 1]);   
            }
            s = e;
        }
    }
    return result;
};
```
