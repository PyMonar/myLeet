# 82. Remove Duplicates from Sorted List II

---

## Description

> Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

> For example,
> Given 1->2->3->3->4->4->5, return 1->2->5.
> Given 1->1->1->2->3, return 2->3.

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
var deleteDuplicates = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    var dic = {};
    var pre, cur = head;
    while (cur !== null) {
        if (dic[cur.val]) {
            dic[cur.val]++;
        } else {
            dic[cur.val] = 1;
        }
        cur = cur.next;
    }

    var origin = new ListNode();
    origin.next = head;

    pre = origin;
    cur = head;
    while (cur !== null) {
        if (dic[cur.val] !== 1) {
            pre.next = cur.next;
            cur = cur.next;
        } else {
            cur = cur.next;
            pre = pre.next;
        }
    }

    return origin.next;
};
```
