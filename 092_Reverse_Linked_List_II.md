# 92. Reverse Linked List II

---

## Description

> Reverse a linked list from position m to n. Do it in-place and in one-pass.

> For example:
> Given 1->2->3->4->5->NULL, m = 2 and n = 4,

> return 1->4->3->2->5->NULL.

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (head === null || head.next === null || m === n) {
        return head;
    }

    var origin = new ListNode();
    origin.next = head;

    var index = 0;
    var pre, cur, next, start = origin;
    // 寻找翻转的前一个节点
    while (index < m - 1) {
        start = start.next;
        index++;
    }

    index++;
    pre = start.next;
    index++;
    cur = pre.next;
    while (index < n && cur !== null) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
        index++;
    }

    start.next.next = cur.next;

    cur.next = pre;

    start.next = cur;

    return origin.next;
};
```
