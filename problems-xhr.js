var superagent = require("superagent"),
    fs = require('fs');

var PROBLEMS_PAGE = 'https://leetcode.com/api/problems/algorithms/';
var BASE_URL = 'https://leetcode.com/problems/';
var problems = [];

superagent.get(PROBLEMS_PAGE).end(function(err, pres) {
    if (err) {
        console.log('err: ' + err);
        return;
    }


    var origins = JSON.parse(pres.text);
    origins = origins.stat_status_pairs;

    var num, title, url;
    for (var i = 1; i < origins.length; i++) {
        var item = origins[i].stat;
        num = item.question_id;
        title = item.question__title;
        url = BASE_URL + item.question__title_slug + '/';

        problems.push({
            num: num,
            title: title,
            url: url
        });
    }

    // 问题序号排序
    problems.sort(function(a, b) {
        return a.num - b.num;
    });

    var str = JSON.stringify(problems, null, 4);

    fs.writeFile('problems.json', str, function(err) {
        if (err) {
            throw err;
        }
        console.log('Problems have been saved!');
    });
});