# 401. Binary Watch

---

## Description

> A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).
> Each LED represents a zero or one, with the least significant bit on the right.
> For example, the above binary watch reads "3:25".
> Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

```
Example:
Input: n = 1

Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
```


```
Note:

The order of output does not matter.
The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".

```


## Java

解法一：回溯法。

```java
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<String> result;
    public List<String> readBinaryWatch(int num) {
        int[] bits = new int[10];
        result = new ArrayList<String>();
        getTime(num, bits, 0);
        return result;
    }
    
    public void getTime(int num, int[] bits, int index) {
        if (num == 0) {
            // 返回结果
            String hour = getHour(bits);
            String minutes = getMinutes(bits);
            if (hour != "" && minutes != "") {
                result.add(hour + ":" + minutes);
            }
            return;
        }
        
        if (index == bits.length) {
            return;
        }
        
        bits[index] = 1;
        getTime(num - 1, bits, index + 1);
        bits[index] = 0;
        getTime(num, bits, index + 1);
    }
    
    public String getHour(int[] bits) {
        int hour = 0;
        for (int i = 0; i < 4; i++) {
            hour = hour * 2 + bits[i];
        }
        if (hour < 12) {
            return hour + "";
        }
        return "";
    }
    
    public String getMinutes(int[] bits) {
        int minutes = 0;
        for (int i = 4; i < 10; i++) {
            minutes = minutes * 2 + bits[i];
        }
        if (minutes < 60) {
            return minutes < 10 ? "0" + minutes : minutes + "";
        }
        return "";
    }
}
```

解法二：直接枚举。

```java
public List<String> readBinaryWatch(int num) {
    ArrayList<String> result = new ArrayList<>();
    for (int i = 0; i < 12; i++) {
        for (int j = 0; j < 60; j++) {
            if (Integer.bitCount(i) + Integer.bitCount(j) == num) {
                result.add(String.format("%d:%02d", i, j));
            }
        }
    }
    return result;
}
```