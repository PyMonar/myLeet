# 223. Rectangle Area

---

## Description

> Find the total area covered by two rectilinear rectangles in a 2D plane.

> Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
## Javascript


```
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    return erea(A, B, C, D) + erea(E, F, G, H) - ereaLength(A, C, E, G) * ereaLength(B, D, F, H);
};

var erea = function(a, b, c, d) {
    return (c - a) * (d - b);
};
var ereaLength = function(a, b, c, d) {
    if (a <= c && b >= d) {
        return d - c;
    } else if (a >= c && b <= d) {
        return b - a;
    } else if (a <= c && b <= d) {
        if (b >= c) {
            return b - c;
        } else {
            return 0;
        }
    } else if (a >= c && b >= d) {
        if (a >= d) {
            return 0;
        } else {
            return d - a;
        }
    }
};
```
