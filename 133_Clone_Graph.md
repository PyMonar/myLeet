# 133. Clone Graph

---

## Description

> Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.


## Javascript

```
PS: JS hash表中如果键是object则无法枚举，给跪了，无法AC。
```

## Python
```
# Definition for a undirected graph node
# class UndirectedGraphNode(object):
#     def __init__(self, x):
#         self.label = x
#         self.neighbors = []

class Solution:
    # @param node, a undirected graph node
    # @return a undirected graph node
    def cloneGraph(self, node):
        if node == None:
            return None
        node_dict = {}
        self.dfs_graph(node, node_dict)
        self.set_neighbor(node_dict)
        return node_dict[node]

    def dfs_graph(self, node, node_dict):
        if node in node_dict:
            return
        new_node = UndirectedGraphNode(node.label)
        node_dict[node] = new_node
        for neighbor in node.neighbors:
            self.dfs_graph(neighbor, node_dict)

    def set_neighbor(self, node_dict):
        for node in node_dict:
            new_node = node_dict[node]
            for neighbor in node.neighbors:
                new_node.neighbors.append(node_dict[neighbor])
```
