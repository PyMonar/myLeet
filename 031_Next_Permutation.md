# 31. Next Permutation

---

## Description

> Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
> If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
> The replacement must be in-place, do not allocate extra memory.

> Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
> 1,2,3 → 1,3,2
> 3,2,1 → 1,2,3
> 1,1,5 → 1,5,1

## Javascript

```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length === 0 || nums.length === 1) {
        return;
    }

    var l = nums.length;
    var cur = l - 2;
    var temp, index;
    while (cur >= 0) {
        if (nums[cur] >= nums[cur + 1]) {
            cur--;
            continue;
        } else {
            index = l - 1;
            for (var i = l - 1; i >= cur + 1; i--) {
                if (nums[i] > nums[cur]) {
                    index = i;
                    break;
                }
            }

            temp = nums[cur];
            nums[cur] = nums[index];
            nums[index] = temp;

            // 排序 cur + 1 ~ l - 1
            var s = cur + 1, e = l - 1;
            while (s < e) {
                temp = nums[s];
                nums[s] = nums[e];
                nums[e] = temp;
                s ++;
                e--;
            }
            return;
        }
    }

    if (cur < 0) {
        nums.reverse();
    }
};
```
