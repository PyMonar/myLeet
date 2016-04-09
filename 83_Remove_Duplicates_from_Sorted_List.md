# 83. Remove Duplicates from Sorted List

---

## Description

> Given a sorted linked list, delete all duplicates such that each element appear only once.

> For example,
> Given 1->1->2, return 1->2.
> Given 1->1->2->3->3, return 1->2->3.

## Javascript

> 思路：两个指针，一个指向当前元素，一个指向前一个元素，如果和前一个元素重复了，则通过指针操作删除当前元素。

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
var deleteDuplicates = function(head) {
    if (head === null) {
        return head;
    }
    
    var cur = head.next, pre = head;
    while (cur !== null) {
        if (pre.val === cur.val) {
            pre.next = cur.next;
            cur = cur.next;
        } else {
            pre = cur;
            cur = cur.next;
        }
    }
    return head;
};
```