# 119. Pascal's Triangle II

---

## Description

> Given an index k, return the kth row of the Pascal's triangle.

> For example, given k = 3,
> Return [1,3,3,1].

## Javascript

```javascript
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var results = [];
    var result, cur, pre;
    for (var i = 0; i <= rowIndex; i++) {
        result = [];
        result.push(1);
        for (var k = 1; k <= i; k++) {
            cur = k === i ? 0 : results[i - 1][k];
            pre = k === 0 ? 0 : results[i - 1][k - 1];
            result.push(cur + pre);
        }
        results.push(result);
        if (i === rowIndex) {
            return result;
        }
    }
    return results;
};
```

## Java

```java
public class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> res = new ArrayList<Integer>();
        List<Integer> tmp = new ArrayList<Integer>();
        res.add(1);
        tmp.add(1);
        for (int i = 1; i <= rowIndex; i++) {
            res.clear();
            res.add(1);
            for (int j = 1; j <= i; j++) {
                if (j == i) {
                    res.add(1);
                    break;
                }
                res.add(tmp.get(j) + tmp.get(j - 1));
            }
            tmp.clear();
            tmp.addAll(res);
        }
        return res;
    }
}
```

另一种方法：

```java
public List<Integer> getRow(int rowIndex) {
	List<Integer> list = new ArrayList<Integer>();
	if (rowIndex < 0) return list;
	for (int i = 0; i < rowIndex + 1; i++) {
		list.add(0, 1);
		for (int j = 1; j < list.size() - 1; j++) {
			list.set(j, list.get(j) + list.get(j + 1));
		}
	}
	return list;
}
```