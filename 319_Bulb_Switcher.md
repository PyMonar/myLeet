# 319. Bulb Switcher

---

## Description

> There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Find how many bulbs are on after n rounds.

> Example:

```
Given n = 3.

At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off].

So you should return 1, because there is only one bulb is on.
```

## Javascript

> 思路：主要是求某个数的约数数目，一个数x，如果从1-x之间存在约数的话，那么一定是成对出现的，除非这个数可以开方。利用这个特点不难解答这道题。

```
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};

```
