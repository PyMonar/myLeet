# 56. Merge Intervals

---

## Description

> Given a collection of intervals, merge all overlapping intervals.

```
For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
```



## Javascript

```javascript
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) {
        return [];
    }
    
    if (intervals.length === 1) {
        return intervals;
    }
    
    intervals.sort(function (a, b) {
        return a.start - b.start;
    });
    
    for (var i = 0; i < intervals.length - 1;) {
        if (intervals[i].end < intervals[i + 1].start) {
            i++;
        } else if (intervals[i].end >= intervals[i + 1].start && intervals[i].end <= intervals[i + 1].end) {
            intervals[i].end = intervals[i + 1].end;
            intervals.splice(i + 1, 1);
        } else {
            intervals.splice(i + 1, 1);
        }
    }
    
    return intervals;
};
```

## Java

```java
/**
 * Definition for an interval.
 * public class Interval {
 *     int start;
 *     int end;
 *     Interval() { start = 0; end = 0; }
 *     Interval(int s, int e) { start = s; end = e; }
 * }
 */
public class Solution {
    public List<Interval> merge(List<Interval> intervals) {
        if (intervals.size() <= 1) {
            return intervals;
        }

        sort(intervals);

        for (int i = 0; i < intervals.size() - 1;) {
            if (intervals.get(i).end < intervals.get(i + 1).start) {
                i++;
            } else if (intervals.get(i).end > intervals.get(i + 1).end) {
                intervals.remove(i + 1);
            } else {
                intervals.get(i).end = intervals.get(i + 1).end;
                intervals.remove(i + 1);
            }
        }

        return intervals;
    }

    public static void sort(List<Interval> a) {
        int N = a.size();
        int h = 1;
        while (h < N / 3) {
            h = 3 * h + 1;
        }

        while (h >= 1) {
            for (int i = h; i < N; i++) {
                for (int j = i; j >= h && a.get(j).start < a.get(j - h).start; j -= h) {
                    Interval t = a.get(j);
                    a.set(j, a.get(j - h));
                    a.set(j - h, t);
                }
            }
            h = h / 3;
        }
    }
}
```