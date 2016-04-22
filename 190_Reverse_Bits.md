# 190. Reverse Bits

---

## Description

> Reverse bits of a given 32 bits unsigned integer.

> For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

## Javascript

```
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    if (n === 0) {
        return 0;
    }
    return toInt(toBits(n));
};

var toBits = function(n) {
    var bits = [];
    while (n !== 1) {
        bits.push(n % 2);
        n = Math.floor(n / 2);
    }
    bits.push(n);
    var l = bits.length;
    for (var i = l; i < 32; i++) {
        bits.push(0);
    }
    return bits;
};

var toInt = function(bits) {
    var int = 0,
        cur;
    var l = bits.length;
    for (var i = 0; i < l; i++) {
        cur = bits[i];
        int = 2 * (int + cur);
    }
    return int / 2;
};
```
