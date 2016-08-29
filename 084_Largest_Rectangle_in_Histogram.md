# 84. Largest Rectangle in Histogram

---

## Description

> Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

For example,

Given heights = [2,1,5,6,2,3],

return 10.


## Python

```python
class Solution(object):
    def largestRectangleArea(self, heights):
        """
        :type heights: List[int]
        :rtype: int
        """
        if len(heights) == 0:
            return 0
        my_stack = []
        max_area = 0
        for height in heights:
            if len(my_stack) == 0:
                my_stack.append(height)
            else:
                top = my_stack[-1]
                if height < top:
                    width = 0
                    cur_height = top
                    while len(my_stack) != 0 and my_stack[-1] > height:
                        width += 1
                        cur_height = my_stack.pop()
                        cur_area = width * cur_height
                        max_area = max_area if max_area > cur_area else cur_area
                    width += 1
                    while width > 0:
                        my_stack.append(height)
                        width -= 1
                else:
                    my_stack.append(height)
        
        for i in range(len(my_stack)):
            temp = my_stack[i] * (len(my_stack) - i)
            max_area = max_area if max_area > temp else temp 
        
        return max_area 
```
