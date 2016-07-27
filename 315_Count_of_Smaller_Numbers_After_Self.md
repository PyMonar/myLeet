# 315. Count of Smaller Numbers After Self

---

## Description

> You are given an integer array nums and you have to return a new counts array.
> The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

> Example:

```
Given nums = [5, 2, 6, 1]

To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
```

> Return the array [2, 1, 1, 0].


## Javascript

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function Node(val, index, small) {
    this.val = val;
    this.index = index;
    this.small = small;
}

var countSmaller = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    var model = [];
    var i;
    for (i = 0; i < nums.length; i++) {
        model.push(new Node(nums[i], i, 0));
    }

    mergeSort(model, 0, model.length - 1);

    model.sort(function (a, b) {
        return a.index - b.index;
    });

    var result = [];
    for (i = 0; i < model.length; i++) {
        result.push(model[i].small);
    }

    return result;
};

function merge(nums, lo, mid, hi) {
    var base = 0;
    var i = lo;
    var j = mid + 1;
    var temp = [];
    while (i <= mid && j <= hi) {
        if (nums[i].val <= nums[j].val) {
            nums[i].small += base;
            temp.push(new Node(nums[i].val, nums[i].index, nums[i].small));
            i++;
        } else {
            base++;
            temp.push(new Node(nums[j].val, nums[j].index, nums[j].small));
            j++;
        }
    }

    while (i <= mid) {
        nums[i].small += base;
        temp.push(new Node(nums[i].val, nums[i].index, nums[i].small));
        i++;
    }

    while (j <= hi) {
        temp.push(new Node(nums[j].val, nums[j].index, nums[j].small));
        j++;
    }

    for (i = lo; i <= hi; i++) {
        nums[i] = temp[i - lo];
    }
}

function mergeSort(nums, lo, hi) {
    if (lo < hi) {
        var mid = Math.floor((lo + hi) / 2);
        mergeSort(nums, lo, mid);
        mergeSort(nums, mid + 1, hi);
        merge(nums, lo, mid, hi);
    }
}
```
