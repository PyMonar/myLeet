/**
 * 求数组最大子序列和
 */

function findMax(arr) {
    var max = arr[0];
    var i, j, k;
    var l = arr.length;
    var temp;
    for (i = 0; i < l; i++) {
        for (j = i; j < l; j++) {
            temp = 0;
            for (k = i; k <= j; k++) {
                temp += arr[k];
                if (temp > max) {
                    max = temp;
                }
            }
        }
    }
    return max;
}

function findMax2(arr) {
    var max = arr[0];
    var memory = [];
    var l = arr.length;
    var i, j;
    var temp;
    memory.push(arr[0]);
    for (i = 1; i < l; i++) {
        memory.push(memory[i - 1] + arr[i]);
    }

    for (i = 0; i < l; i++) {
        for (j = i; j < l; j++) {
            temp = memory[j] - memory[i] + arr[i];
            if (temp > max) {
                max = temp; 
            }
        }
    }

    return max;
}

function findMax3(arr) {
    var max = arr[0];
    var curMax = arr[0];
    var l = arr.length;
    var i;
    for (i = 1; i < l; i++) {
        curMax = curMax + arr[i] > arr[i] ? curMax + arr[i] : arr[i];
        if (curMax > max) {
            max = curMax;
        }
    }

    return max;
}

var arr = [31, -41, 59, 26, -53];

//O(n*n*n)
console.log(findMax(arr));
//O(n*n)
console.log(findMax2(arr));
//O(n)
console.log(findMax3(arr));