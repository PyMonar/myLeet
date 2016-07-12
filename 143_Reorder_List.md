# 143. Reorder List

---

## Description


> Given a singly linked list L: L0→L1→…→Ln-1→Ln,
> reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

> You must do this in-place without altering the nodes' values.

> For example,
> Given {1,2,3,4}, reorder it to {1,4,2,3}.



## Javascript

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head === null || head.next === null || head.next.next === null) {
        return;
    }

    var q = [];
    var cur = head;
    while (cur !== null) {
        q.push(cur);
        cur = cur.next;
    }

    var s = 0, e = q.length - 1;
    cur = head;
    while (s < e) {
        q[s++].next = q[e];
        q[e--].next = q[s];
    }
    q[s].next = null;
};
```
