# 134. Gas Station

---

## Description

> There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

> You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

> Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.

## Javascript

```
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var remain = 0, // 在到达当前站点剩余的油量
        total = 0,  // 只要总油量比消耗的大，就可以跑圈圈了
        end = -1;   // 可以到达的位置
    for (var i = 0; i < gas.length; ++i) {
        var left = gas[i] - cost[i];
        remain += left;
        total += left;
        if (remain < 0) { // 不够到下一站，我们从这一站从新开始看
            end = i;
            remain = 0;
        }
    }

    return total >= 0 ? end + 1 : -1;
};
```
