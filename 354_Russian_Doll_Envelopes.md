# 354. Russian Doll Envelopes

---

## Description

> You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

> What is the maximum number of envelopes can you Russian doll? (put one inside other)

> Example:

```
Given envelopes = [[5,4],[6,4],[6,7],[2,3]], the maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
```

## Javascript

```javascript
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if(envelopes.length === 0) {
        return 0;
    }
    var l = envelopes.length;
    var result = [];
    var i, j;
    var max = 1;
    for (i = 0; i < l; i++) {
        result.push(1);
    }

    envelopes.sort(function (a, b) {
        return a[0] - b[0];
    });

    for (i = 0; i < l; i++) {
        for (j = 0; j < i; j++) {
            if (envelopes[j][0] >= envelopes[i][0]) {
                continue;
            }
            if (envelopes[j][1] >= envelopes[i][1]) {
                continue;
            }
            
            result[i] = result[j] + 1 > result[i] ? result[j] + 1 : result[i];
            max = result[i] > max ? result[i] : max;
        }
    }
    return max;
};
```