# 25. Reverse Nodes in k-Group

---

## Description

> Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
> If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
> You may not alter the values in the nodes, only nodes itself may be changed.
> Only constant memory is allowed.

> For example,

> Given this linked list: 1->2->3->4->5

> For k = 2, you should return: 2->1->4->3->5

> For k = 3, you should return: 3->2->1->4->5


## Javascript

```javascript
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
var reverseKGroup = function(head, k) {
    if (head === null || head.next === null) {
        return head;
    }

    var origin = new ListNode();
    origin.next = head;
    
    var pre;
    var cur = head;
    var cursor = cur;
    var start = origin;
    var temp;
    var flag = true;
    var step;

    while (flag) {
        step = k - 1;
        cursor = cur;
        while (cursor !== null && step--) {
            cursor = cursor.next;
        }

        if (cursor !== null) {
            pre = cur;
            cur = cur.next;
            step = k;
            while (cur !== null && --step) {
                next = cur.next;
                cur.next = pre;
                pre = cur;
                cur = next;
            }

            temp = start.next;
            start.next = pre;
            start = temp;
            start.next = cur;
        } else {
            flag = false;
        }
    }

    return origin.next;
};
```
