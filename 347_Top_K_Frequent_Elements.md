# 347. Top K Frequent Elements

---

## Description

> Given a non-empty array of integers, return the k most frequent elements.

> For example,
> Given [1,1,1,2,2,3] and k = 2, return [1,2].

## Javascript


```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var result = [];
    var dic = {};
    var i;
    var maxTime = 0;
    // 将每个数字出现的次数做成字典
    for (i = 0; i < nums.length; i++) {
        if (dic[nums[i]]) {
            dic[nums[i]]++;
            if (dic[nums[i]] > maxTime) {
                maxTime = dic[nums[i]];
            }

        } else {
            dic[nums[i]] = 1;
        }
    }
    // 从字典里找出出现次数最大的k个数字
    var min , index;
    for (var key in dic) {
        result.push(key - 0);
        if (result.length > k) {
            min = maxTime + 1;
            // 当超出k个数字之后，找出result里边出现次数最小的那个，然后去掉
            for (i = 0; i < result.length; i++) {
                if (dic[result[i]] < min) {
                    min = dic[result[i]] ;
                    index = i;
                }
            }
            // 去掉出现次数最小的那个
            result.splice(index, 1);
        }
    }

    return result;
};
```
