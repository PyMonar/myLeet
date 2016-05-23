# 142. Linked List Cycle II

---

## Description

> Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null || head.next === null) {
        return null;
    }

    var start = head;
    var meet;
    var fp = head;
    var sp = head;

    while (fp !== null && fp.next !== null) {
        fp = fp.next.next;
        sp = sp.next;
        if (fp === sp) {
            meet = fp;
            break;
        }
    }

    if(fp === null || fp.next === null) {
        return null;
    } else {
       while (start !== meet) {
           start = start.next;
           meet = meet.next;
       }
       return start;
    }
};
```
