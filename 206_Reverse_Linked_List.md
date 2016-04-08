# 206. Reverse Linked List

---

## Description

> Reverse a singly linked list.

## Javascript

> ˼·������3��ָ�룬ǰ�������ڷ�ת����ָ�룬���һ�����ڻ�����һ����Ҫ����ת��Ԫ�ء�

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