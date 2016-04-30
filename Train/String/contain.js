/**
 * b字符数组是否是a字符数组的子集
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */
var stringContain = function(a, b) {
    var dic = {};
    for (var i = 0; i < a.length; i++) {
        if (dic[a[i]]) {
            dic[a[i]]++;
        } else {
            dic[a[i]] = 1;
        }
    }

    for (var j = 0; j < b.length; j++) {
        if (dic[b[j]] === undefined) {
            return false;
        }
    }
    return true;
}

/**
 * 判断两个字符串是否是兄弟字符串，即字符一样只是出现的顺序不一样
 * @param  {[type]}  a [description]
 * @param  {[type]}  b [description]
 * @return {Boolean}   [description]
 */
var isBrother = function(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    var dicA = {},
        dicB = {};
    var i;
    for (i = 0; i < a.length; i++) {
        if (dicA[a[i]]) {
            dicA[a[i]]++;
        } else {
            dicA[a[i]] = 1;
        }
    }

    for (i = 0; i < b.length; i++) {
        if (dicB[b[i]]) {
            dicB[b[i]]++;
        } else {
            dicB[b[i]] = 1;
        }
    }

    for (var key in dicA) {
        if (dicA[key] !== dicB[key]) {
            return false;
        }
    }
    return true;

}