# 206. Reverse Linked List

---

## Description

> Reverse a singly linked list.

## Javascript

> 思路：设置3个指针，前两个用于反转链表指针，最后一个用于缓存下一个将要被反转的元素。

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
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    var pre = head, cur = pre.next, next;
    while ( cur !== null) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    
    head.next = null;
    
    return pre;
};
```