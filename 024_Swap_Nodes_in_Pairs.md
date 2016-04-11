# 24. Swap Nodes in Pairs

---

## Description

> Given a linked list, swap every two adjacent nodes and return its head.

> For example,
> Given 1->2->3->4, you should return the list as 2->1->4->3.

> Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

## Javascript

> 思路：三个指针解决，注意两两指针对换的时候别丢了和前边的链表的指向关系。

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
var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    var newHead = head.next;
    var pre = head, cur , next;
    while (pre !== null && pre.next !== null) {
        //修复两对交换子链表之间的连接关系
        if (cur !== undefined) {
            cur.next.next = pre.next;
        }

        cur = pre.next;
        next = cur.next;

        cur.next = pre;
        pre.next = next;

        pre = next;
    }

    return newHead;

};
```
