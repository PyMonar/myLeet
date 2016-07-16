# 127. Word Ladder

---

## Description

> Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

> 1. Only one letter can be changed at a time
> 2. Each intermediate word must exist in the word list

> For example,

> Given:

> beginWord = "hit"

> endWord = "cog"

> wordList = ["hot","dot","dog","lot","log"]

> As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",

> return its length 5.

> Note:

> 1. Return 0 if there is no such transformation sequence.
> 2. All words have the same length.
> 3. All words contain only lowercase alphabetic characters.




## Javascript

```javascript
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var alpha = [], i, j;
    for (i = 0; i < 26; i++) {
        alpha.push(String.fromCharCode(i + 97));
    }

    var l = beginWord.length;
    wordList.add(endWord);
    var q = [[beginWord, 1]];
    wordList.delete(beginWord);

    while(q.length !== 0) {
        var cur = q.shift();
        for (i = 0; i < l; i++) {
            for (j = 0; j < 26; j++) {
                var temp = cur[0].slice(0, i) + alpha[j] + cur[0].slice(i + 1);
                if (temp === cur[0]) {
                    continue;
                }
                if (temp === endWord) {
                    return cur[1] + 1;
                } 

                if (wordList.has(temp)) {
                    q.push([temp, cur[1] + 1]);
                    wordList.delete(temp);
                }
            }
        }
    }

    return 0;
};
```
