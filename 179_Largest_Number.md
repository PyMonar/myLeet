# 179. Largest Number

---

## Description

> Given a list of non negative integers, arrange them such that they form the largest number.

> For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

> Note: The result may be very large, so you need to return a string instead of an integer.


## Javascript

```javascript
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    var i, j;
    for (i = 0; i < nums.length; i++) {
        nums[i] = nums[i] + '';
    }
    
    for (i = 1; i < nums.length; i++) {
        var cur = nums[i];
        for (j = 0; j < i; j++) {
            if (helper(cur, nums[j])) {
                nums.splice(j, 0, cur);
                i++;
                nums.splice(i, 1);
                i--;
                break;
            }
        }
    }
    var str = nums.join('');
    if (str - 0 === 0) {
        return '0';
    } else {
        return str;
    }
};

var helper = function (str1, str2) {
    var num1 = str1 + str2 - 0;
    var num2 = str2 + str1 - 0;
    return num1 > num2;
};
```
