var superagent = require("superagent"),
    cheerio = require("cheerio"),
    fs = require('fs');

var PROBLEMS_PAGE = 'https://leetcode.com/problemset/algorithms/';
var BASE_URL = 'https://leetcode.com';
var problems = [];

superagent.get(PROBLEMS_PAGE).end(function(err, pres) {
    if (err) {
        console.log('err: ' + err);
        return;
    }

    var $ = cheerio.load(pres.text);
    var listCollect = $('#problemList').find('tr');

    var num, title, url;
    for (var i = 1; i < listCollect.length; i++) {
        num = $(listCollect[i]).find('td').eq(1).html();
        title = $(listCollect[i]).find('td').eq(2).find('a').html();
        url = BASE_URL + $(listCollect[i]).find('td').eq(2).find('a').attr('href');

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
