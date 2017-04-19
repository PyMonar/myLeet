# 11. Container With Most Water

---

## Description

> Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

## Javascript


```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length < 2) {
        return 0;
    }

    var l = height.length - 1;

    var i = 0, j = l;
    var max = 0, temp, h;
    while (i !== j) {
        h = height[i] > height[j] ? height[j] : height[i];
        temp = (j - i) * h;
        max = max > temp ? max : temp;

        if (height[i] > height[j]) {
            while (i !== j && height[j] <= h) {
                j--;
            }
        } else {
            while (i !== j && height[i] <= h) {
                i++;
            }
        }
    }

    return max;
};
```
