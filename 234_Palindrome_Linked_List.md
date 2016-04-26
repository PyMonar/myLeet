# 234. Palindrome Linked List  

---

## Description

> Given a singly linked list, determine if it is a palindrome.


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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null) {
        return true;
    }
    var result = [];
    var p = head;
    while (p !== null) {
        result.push(p.val + '');
        p = p.next;
    }
    var str = result.join('');
    var rStr = result.reverse().join('');
    return str === rStr;

};
```
