# 327. Count of Range Sum

---

## Description


> Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
> Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive.


> Note:

> A naive algorithm of O(n2) is trivial. You MUST do better than that.

> Example:

> Given nums = [-2, 5, -1], lower = -2, upper = 2,

> Return 3.

> The three ranges are : [0, 0], [2, 2], [0, 2] and their respective sums are: -2, -1, 2.

## C++

```cpp
class Solution {
public:
    int countRangeSum(vector<int>& nums, int lower, int upper) {
        vector<long> sums(nums.size() + 1, 0);
        for (int i = 0; i < nums.size(); ++i) {
            sums[i + 1] = sums[i] + nums[i];
        }
        return countAndMergeSort(sums, 0, sums.size(), lower, upper);
    }
    int countAndMergeSort(vector<long> &sums, int start, int end, int lower, int upper) {
        if (end - start <= 1) return 0;
        int mid = start + (end - start) / 2;
        int cnt = countAndMergeSort(sums, start, mid, lower, upper) + countAndMergeSort(sums, mid, end, lower, upper);
        int j = mid, k = mid, t = mid;
        vector<int> cache(end - start, 0);
        for (int i = start, r = 0; i < mid; ++i, ++r) {
            while (k < end && sums[k] - sums[i] < lower) ++k;
            while (j < end && sums[j] - sums[i] <= upper) ++j;
            while (t < end && sums[t] < sums[i]) cache[r++] = sums[t++];
            cache[r] = sums[i];
            cnt += j - k;
        }
        copy(cache.begin(), cache.begin() + t - start, sums.begin() + start);
        return cnt;
    }
};
```
