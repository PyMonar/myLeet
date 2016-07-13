# 61. Rotate List

---

## Description

> Given a list, rotate the list to the right by k places, where k is non-negative.

> For example:
> Given 1->2->3->4->5->NULL and k = 2,
> return 4->5->1->2->3->NULL.



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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null) {
        return null;
    }
    
    var l = 0;
    var cur = head;
    while (cur !== null) {
        l++;
        cur = cur.next;
    }

    var swap = k % l;
    if (swap === 0) {
        return head;
    }

    cur = head;
    var offest = l - swap;
    while (offest > 1) {
        cur = cur.next;
        offest--;
    }

    var new_header = cur.next;
    var last = new_header;
    while (last.next !== null) {
        last = last.next;
    }

    last.next = head;
    cur.next = null;
    
    return new_header;
};
```
