# 141. Linked List Cycle

---

## Description

> Given a linked list, determine if it has a cycle in it.

## Javascript

> 思路：设置两个指针，一个快指针一个慢指针，让两个指针同时移动，如果两个指针有相同指向的情况则存在环。

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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false;
    }

    var fast = head, slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }

    return false;
};
```
