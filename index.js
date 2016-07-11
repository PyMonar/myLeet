/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    s = '#' + s.split('').join('#') + '#';
    var i, l = s.length;
    var p = [];
    for (i = 0; i < l; i++) {
        p.push(0);
    }

    var C = 0, R = 0;
    var pre, after;
    for (i = 1; i < l - 1; i++) {
        if (i > R) {
            C = i;
            pre = i, after = i;
            while(s[--pre] === s[++after] && after < l && pre >= 0) {
                p[i]++;
            }
            R = i + p[i];
        } else {
            // 两种情况
            var i_mirror = C - (i - C);
            var mirrorValue = p[i_mirror];
            // 镜像在范围内
            if (mirrorValue < R - i) {
                p[i] = mirrorValue;
            } else { // 镜像超出范围
                C = i;
                p[i] = R - i;
                after = R, pre = i - (R - i);
                while(s[--pre] === s[++after] && after < l && pre >= 0) {
                    p[i]++;
                }
                R = i + p[i];
            }
        }
    }
    console.log(p);
    var max = 1, index;
    for (i = 0; i < l; i++) {
        if (p[i] >= max) {
            index = i;
            max = p[i];
        }
    }
    console.log(index);

    return s.slice(index - p[index], index + p[index]).split('#').join('');
};


console.log(longestPalindrome('aba'));