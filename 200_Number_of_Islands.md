# 200. Number of Islands

---

## Description

> Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

> Example 1:

```
11110
11010
11000
00000
```

> Answer: 1

> Example 2:

```
11000
11000
00100
00011
```

> Answer: 3

## Javascript


```javascript
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var m = grid.length;
    if (m === 0) {
        return 0;
    }
    var n = grid[0].length;
    if (n === 0) {
        return 0;
    }

    var result = 0;

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == '1') {
                result++;
                dfs(grid, i, j, m, n);
            }
        }
    }

    return result;
};

var dfs = function (grid, i, j, m, n) {
    if (i < 0 || j < 0 || i > m - 1 || j > n - 1) {
        return;
    }

    if (grid[i][j] == '1') {
        grid[i][j] = '0';
        dfs(grid, i - 1, j, m, n);
        dfs(grid, i + 1, j, m, n);
        dfs(grid, i, j - 1, m, n);
        dfs(grid, i, j + 1, m, n);
    }
};
```

## Java

```java

public class Solution {
    public int numIslands(char[][] grid) {
        if (grid.length == 0) {
            return 0;
        }
        int m = grid.length;
        int n = grid[0].length;
        int p, q;
        QuickUnionFind uf = new QuickUnionFind(grid);
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '1') {
                    p = getIndex(i, j, n);
                    if (i - 1 >= 0 && grid[i - 1][j] == '1') {
                        q = getIndex(i - 1, j, n);
                        uf.union(p, q);
                    }

                    if (i + 1 < m && grid[i + 1][j] == '1') {
                        q = getIndex(i + 1, j, n);
                        uf.union(p, q);
                    }

                    if (j - 1 >= 0 && grid[i][j - 1] == '1') {
                        q = getIndex(i, j - 1, n);
                        uf.union(p, q);
                    }

                    if (j + 1 < n && grid[i][j + 1] == '1') {
                        q = getIndex(i, j + 1, n);
                        uf.union(p, q);
                    }
                }
            }
        }
        return uf.count(); 
    }

    public int getIndex(int i, int j, int n) {
        return i * n + j;
    }

    public class QuickUnionFind {
        
        private int[] id;
        private int count;
        
        public QuickUnionFind(char[][] grid) {
            int m = grid.length;
            int n = grid[0].length;
            
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (grid[i][j] == '1') {
                        count++;
                    }
                }
            }
            
            id = new int[m * n];
            for (int i = 0; i < m * n; i++) {
                id[i] = i;
            }
        }
        
        public int count() {
            return count;
        }
        
        public int find(int p) {
            while (p != id[p]) {
                p = id[p];
            }
            return p;
        }
        
        public void union (int p, int q) {
            int pRoot = find(p);
            int qRoot = find(q);
            
            if (pRoot == qRoot) {
                return;
            }
            
            id[pRoot] = qRoot;
            count--;
        }
        
        public boolean connected (int p, int q) {
            return find(p) == find(q);
        }
    }
}
```