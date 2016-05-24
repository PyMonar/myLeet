# 86. Partition List

---

## Description

> Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

> You should preserve the original relative order of the nodes in each of the two partitions.

> For example,
> Given 1->4->3->2->5->2 and x = 3,
> return 1->2->2->4->3->5.

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (head === null) {
        return null;
    }

    var cur = head;

    var big = new ListNode();

    var big_cur = big;

    while (cur !== null && cur.val >= x) {
        big_cur.next = cur;
        big_cur = big_cur.next;

        cur = cur.next;

    }

    if (cur === null) {
        return head;
    }

    head = cur;

    var pre = head;
    cur = head.next;

    while (cur !== null) {
        if (cur.val < x) {
            pre = cur;
            cur = cur.next;
        } else {
            big_cur.next = cur;
            big_cur = big_cur.next;

            cur = cur.next;
            pre.next = cur;
        }
    }
    
    big_cur.next = null;
    pre.next = big.next;

    return head;

};
```
