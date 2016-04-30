/**
 * 反转字符串
 * @return {[type]} str = [], 字符数组
 */
var reverseStr = function(str, from, to) {
    var temp;
    while (from < to) {
        temp = str[from];
        str[from] = str[to];
        str[to] = temp;
        from++;
        to--;
    }
};

/**
 * 反转句子
 * @param  {[type]} str = [], 字符数组
 * @return {[type]}     [description]
 */
var reverseSentence = function(str) {
    var l = str.length;
    reverseStr(str, 0, l - 1);

    var cur = 0,
        step = 0;
    while (cur < l) {
        step = cur;
        while (str[step] !== ' ' && step < l) {
            step++;
        }
        step--;
        reverseStr(str, cur, step);
        cur = step + 2;
    }
}