# 19. Remove Nth Node From End of List

---

## Description

> Given a linked list, remove the nth node from the end of list and return its head.

> For example,

   > Given linked list: 1->2->3->4->5, and n = 2.

   > After removing the second node from the end, the linked list becomes 1->2->3->5.
> Note:
> Given n will always be valid.
> Try to do this in one pass.

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var l = 0;
    var pointer = head;
    while (pointer !== null) {
        l++;
        pointer = pointer.next;
    }

    var index = l - n;
    pointer = head;
    if (index === 0) {
        return pointer.next;
    }

    for (var i = 0; i < index; i++) {
        if (i === index - 1) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;
        }
    }

    return head;

};
```
