# 125. Valid Palindrome

---

## Description

> Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

> For example,
> "A man, a plan, a canal: Panama" is a palindrome.
> "race a car" is not a palindrome.

> Note:
> Have you consider that the string might be empty? This is a good question to ask during an interview.

> For the purpose of this problem, we define empty string as valid palindrome.

## Javascript


```
/**
* @param {string} s
* @return {boolean}
*/
var isPalindrome = function(s) {
   if (s === '') {
       return true;
   }
   var result = [];

   s = s.toLowerCase();

   for (var i = 0; i < s.length; i++) {
       var asc = s[i].charCodeAt();
       if (asc <= 57 && asc >= 48 || asc <= 122 && asc >= 97) {
           result.push(s[i]);
       }
   }

   return result.join('') === result.reverse().join('');
};
```
