# 328. Odd Even Linked List

---

## Description

> Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

> You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

> Example:
> Given 1->2->3->4->5->NULL,
> return 1->3->5->2->4->NULL.

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
var oddEvenList = function(head) {
    if (head === null) {
        return null;
    }

    var oddHead = head,
        evenHead = head.next,
        op = oddHead,
        ep = evenHead;
    while (op !== null && ep !== null) {
        op.next = ep.next;
        if (op.next !== null) {
            op = op.next;
            ep.next = op.next;
            ep = ep.next;
        } else {
            ep = ep.next;
        }
    }
    op.next = evenHead;

    return oddHead;

};
```
