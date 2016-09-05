# 68. Text Justification

---

## Description

Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

For example,
words: ["This", "is", "an", "example", "of", "text", "justification."]
L: 16.

```
Return the formatted lines as:

[
   "This    is    an",
   "example  of text",
   "justification.  "
]

```
Note: Each word is guaranteed not to exceed L in length.


## Python

```python
class Solution(object):
    def fullJustify(self, words, maxWidth):
        """
        :type words: List[str]
        :type maxWidth: int
        :rtype: List[str]
        """
        if len(words) == 0 or maxWidth == 0:
            return [""]
        
        result = []
        line = []
        line_width = maxWidth
        while len(words) > 0:
            item = words[0]
            if len(line) == 0:
                line.append(item)
                words.pop(0)
                line_width -= len(item)
            elif len(item) + 1 <= line_width:
                line.append(' ')
                line.append(item)
                words.pop(0)
                line_width -= len(item) + 1
            else:
                #justyfy line
                if len(line) > 1:
                    space_nums = line_width
                    space_index = 1
                    while space_nums > 0:
                        line[space_index] += ' '
                        space_nums -= 1
                        if space_index + 2 == len(line):
                            space_index = 1
                        else:
                            space_index += 2
                    result.append(''.join(line))
                else:
                    result.append(line[0] + line_width * ' ')
                line = []
                line_width = maxWidth
                
        # post handle: last line
        line.append(' ' * line_width)
        result.append(''.join(line))

        return result
```
