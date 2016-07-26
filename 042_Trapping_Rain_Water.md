# 42. Trapping Rain Water

---

## Description

> Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

> For example, 

> Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


## Javascript

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var l = height.length;
    if (l <= 2) {
        return 0;
    }
    
    var s = 0, e = 0;
    var water = 0;
    var temp = 0;
    while (s < l && e < l) {
        if (height[s] > height[e]) {
            temp += height[s] - height[e];
        } else {
            water += temp;
            temp = 0;
            s = e;
        }
        e++;
    }

    height.reverse();
    s = e = 0;
    temp = 0;

    while (s < l && e < l) {
        if (height[s] >= height[e]) {
            temp += height[s] - height[e];
        } else {
            water += temp;
            temp = 0;
            s = e;
        }
        e++;
    }

    return water;
};
```
