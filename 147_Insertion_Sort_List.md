# 147. Insertion Sort List

---

## Description

> Sort a linked list using insertion sort.

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
var insertionSortList = function(head) {
    if (head === null) {
        return null;
    }

    var sorted = new ListNode(head.val);

    var p = head.next;

    var val;
    var temp;

    var cur;
    while (p !== null) {
        val = p.val;
        if (val <= sorted.val) {
            temp = sorted;
            sorted = new ListNode(val);
            sorted.next = temp;
        } else {
            cur = sorted.next;
            pre = sorted;
            while (cur !== null) {
                if (cur.val <= val) {
                    cur = cur.next;
                    pre = pre.next;
                } else {
                    pre.next = new ListNode(val);
                    pre.next.next = cur;
                    break;
                }
            }

            if (cur === null) {
                pre.next = new ListNode(val);
            }
        }

        p = p.next;
    }

    return sorted;
};
```
