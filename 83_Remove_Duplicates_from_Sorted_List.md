# 83. Remove Duplicates from Sorted List

---

## Description

> Given a sorted linked list, delete all duplicates such that each element appear only once.

> For example,
> Given 1->1->2, return 1->2.
> Given 1->1->2->3->3, return 1->2->3.

## Javascript

> ˼·������ָ�룬һ��ָ��ǰԪ�أ�һ��ָ��ǰһ��Ԫ�أ������ǰһ��Ԫ���ظ��ˣ���ͨ��ָ�����ɾ����ǰԪ�ء�

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