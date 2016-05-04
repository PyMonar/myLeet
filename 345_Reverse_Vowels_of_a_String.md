# 345. Reverse Vowels of a String

---

## Description

> Write a function that takes a string as input and reverse only the vowels of a string.

> Example 1:
> Given s = "hello", return "holle".

> Example 2:
> Given s = "leetcode", return "leotcede".

## Javascript


```
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if (s === '') {
        return s;
    }
    var arr = s.split('');

    var l = s.length;
    var i = 0, j = l-1, temp;
    while (i < j) {
        if (isVowels(arr[i]) && isVowels(arr[j])) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }

        if (!isVowels(arr[i])) {
            i++;
        }

        if (!isVowels(arr[j])) {
            j--;
        }
    }

    return arr.join('');
};

var isVowels = function (s) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    s = s.toLowerCase();
    return vowels.indexOf(s) !== -1;
}
```
