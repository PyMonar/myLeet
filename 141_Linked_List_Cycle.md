# 141. Linked List Cycle

---

## Description

> Given a linked list, determine if it has a cycle in it.

## Javascript

> 思路：设置两个指针，一个快指针一个慢指针，让两个指针同时移动，如果两个指针有相同指向的情况则存在环。

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
## Java

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) return false;
        ListNode slow = head.next;
        ListNode fast = slow.next;
        while (fast != null) {
            if (fast == slow) return true;
            slow = slow.next;
            if (fast.next == null) return false;
            fast = fast.next.next;
        }
        return false;
    }
}
```