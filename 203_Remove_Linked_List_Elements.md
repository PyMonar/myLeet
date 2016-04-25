# 203. Remove Linked List Elements

---

## Description

> Remove all elements from a linked list of integers that have value val.

> Example
> Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
> Return: 1 --> 2 --> 3 --> 4 --> 5

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null) {
        return null;
    }

    var cur = head, next;

    while (cur !== null && cur.val === val) {
        cur = cur.next;
    }
    head = cur;


    while (cur !== null) {
        next = cur.next;
        if (next === null) {
            return head;
        } else {
            while (next !== null && next.val === val) {
                next = next.next;
            }

            if (next === null) {
                cur.next = null;
                return head;
            } else {
                cur.next = next;
                cur = next;
            }
        }
    }

    return head;
};
```
