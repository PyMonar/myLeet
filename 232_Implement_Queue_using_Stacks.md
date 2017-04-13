# 232. Implement Queue using Stacks

---

## Description

```
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.

pop() -- Removes the element from in front of queue.

peek() -- Get the front element.

empty() -- Return whether the queue is empty.
```

Notes:

1. You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.

2. Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.

3. You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).


## Java

```java
public class MyQueue {
    private Stack<Integer> main;
    private Stack<Integer> helper;
    /** Initialize your data structure here. */
    public MyQueue() {
        this.main = new Stack<Integer>();
        this.helper = new Stack<Integer>();
    }
    
    /** Push element x to the back of queue. */
    public void push(int x) {
        this.main.push(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    public int pop() {
        int res;
        while (!this.main.isEmpty()) {
            this.helper.push(this.main.pop());
        }
        res = this.helper.pop();
        while (!this.helper.isEmpty()) {
            this.main.push(this.helper.pop());
        }
        return res;
        
    }
    
    /** Get the front element. */
    public int peek() {
        int res;
        while (!this.main.isEmpty()) {
            this.helper.push(this.main.pop());
        }
        res = this.helper.peek();
        while (!this.helper.isEmpty()) {
            this.main.push(this.helper.pop());
        }
        return res;
    }
    
    /** Returns whether the queue is empty. */
    public boolean empty() {
        return main.isEmpty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
```

以上算法可以优化，每次pop的时候不必要再将所有元素返回main栈，保存在helper里边即可。

```java
class MyQueue {

    Stack<Integer> input = new Stack();
    Stack<Integer> output = new Stack();
    
    public void push(int x) {
        input.push(x);
    }

    public void pop() {
        peek();
        output.pop();
    }

    public int peek() {
        if (output.empty())
            while (!input.empty())
                output.push(input.pop());
        return output.peek();
    }

    public boolean empty() {
        return input.empty() && output.empty();
    }
}
```