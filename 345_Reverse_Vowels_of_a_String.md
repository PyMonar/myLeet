# 345. Reverse Vowels of a String

---

## Description

> Write a function that takes a string as input and reverse only the vowels of a string.

> Example 1:
> Given s = "hello", return "holle".

> Example 2:
> Given s = "leetcode", return "leotcede".

## Javascript


```javascript
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
};
```

## Java

```java
public class Solution {
    public String reverseVowels(String s) {
        char[] arr = s.toCharArray();
        int i = 0, j = s.length() - 1;
        while (i < j) {
            while (!isVowels(arr[i]) && i < j) {
                i++;
            }
            while (!isVowels(arr[j]) && i < j) {
                j--;
            }
            if (i >= j) break;
            char tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
        }
        return String.valueOf(arr);
    }
    
    public boolean isVowels(char ch) {
        return ch == 'a' || ch == 'A' || ch == 'e' || ch == 'E' || ch == 'i' || ch == 'I' || ch == 'o' || ch == 'O' || ch == 'u' || ch == 'U';
    }
}
```