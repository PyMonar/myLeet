/**
 * 返回字符串中所有字符的全排列
 * @param  {[type]} s [description]
 * @return {[type]}   [description]
 */
var allCombo = function(s) {
    var arr = s.split('');
    var result = [];
    var sortedIndex = [];
    combo(sortedIndex, arr, result);
    return result;

}

var combo = function(si, arr, result) {
    var item = [];
    if (si.length === arr.length) {
        si.forEach(function(i) {
            return item.push(arr[i]);
        });
        result.push(item.join(''));
    } else {
        var indexs;
        for (var i = 0; i < arr.length; i++) {
            indexs = si.slice(0);
            if (si.indexOf(i) === -1) {
                indexs.push(i);
                combo(indexs, arr, result);
            }
        }
    }
}