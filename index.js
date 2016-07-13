/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var stack = [];
    path = path.split('/');
    var l = path.length,
        i;
    for (i = 0; i < l; i ++) {
        if (path[i]) {
            stack.push('/');
            if (path[i] === '.') {
                stack.pop();
                continue;
            } else if (path[i] === '..') {
                stack.pop();
                stack.pop();
                stack.pop();
            } else {
                stack.push(path[i]);
            }
        }
    }

    if(stack.length === 0) {
        stack.push('/');
    }

    return stack.join('');
};

console.log(simplifyPath('///a/../c/d/c'));