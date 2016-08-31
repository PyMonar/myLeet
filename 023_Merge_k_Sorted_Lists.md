# 23. Merge k Sorted Lists

---

## Description

> Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.


## Python

```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergeKLists(self, lists):
        pq = [None]
        # create heap
        self.createHeap(pq, lists)
        # make list
        result = ListNode(None)
        cur = result
        while len(pq) > 1:
            cur.next = ListNode(self.delMin(pq))
            cur = cur.next
        return result.next
            
    def createHeap(self, pq, lists):
        for node_list in lists:
            if node_list != None:
                pq.append(node_list)
                self.swim(pq, len(pq) - 1)
    
    def delMin(self, pq):
        min_node = pq[1]
        min_value = min_node.val
        min_node = min_node.next
        if min_node != None:
            pq[1] = min_node
            self.sink(pq, 1, len(pq) - 1)
        else:
            if len(pq) == 2:
                pq.pop()
            else:
                pq[1] = pq.pop()
                self.sink(pq, 1, len(pq) - 1)
        return min_value
        
    def swim(self, pq, k):
        while k > 1 and pq[k].val < pq[k / 2].val:
            pq[k], pq[k / 2] = pq[k / 2], pq[k]
            k = k / 2
    
    def sink(self, pq, k, n):
        while 2 * k <= n:
            j = 2 * k
            if j < n and pq[j + 1].val < pq[j].val:
                j += 1
            if pq[j].val > pq[k].val:
                break
            pq[k], pq[j] = pq[j], pq[k]
            k = j
```
