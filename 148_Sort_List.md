# 148. Sort List

---

## Description

> Sort a linked list in O(n log n) time using constant space complexity.

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
var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    var nums = [];
    var p = head;
    while (p !== null) {
        nums.push(p.val);
        p = p.next;
    }

    nums.sort(function (a, b) {
        return a - b;
    });

    var result = new ListNode(nums[0]);
    var cur = result;
    for (var i = 1; i < nums.length; i++) {
        cur.next = new ListNode(nums[i]);
        cur = cur.next;
    }

    return result;
};
```
