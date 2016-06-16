// 输入参数
var param = process.argv.splice(2);
var input_num = param[0] - 0;

var superagent = require("superagent"),
    cheerio = require("cheerio"),
    fs = require('fs');

fs.readFile('problems.json', 'utf8', function(err, data) {
    if (err) {
        throw err;
    }

    var list = JSON.parse(data);

    // 查询题号
    var url;
    var pro_title;
    for (var i = 0; i < list.length; i++) {
        if (list[i].num - 0 === input_num) {
            url = list[i].url;
            pro_title = list[i].title;
            break;
        }
    }

    superagent.get(url).end(function(err, pres) {
        if (err) {
            console.log('err: ' + err);
            return;
        }

        var $ = cheerio.load(pres.text);

        var title = $('div.question-title').find('h3').html();
        var desc = '';

        var content = $('div.question-content').children();
        for (var i = 0; i < content.length; i++) {
            var ele = content[i];
            if ($(ele).html().trim() === '') {
                continue;
            }

            if (ele.tagName == 'p') {
                var text = $(ele).html();
                text = text.trim();
                if (text.indexOf('\n') !== -1) {
                    desc += '\n```\n';
                    desc += text + '\n';
                    desc += '```\n\n';
                } else {
                    desc += '> ' + text + '\n';
                }

            }
        }

        desc = desc.replace(/<[^>]+>/g, '');

        var fileNum = input_num + '';
        if (fileNum.length === 1) {
            fileNum = '00' + fileNum;
        }

        if (fileNum.length === 2) {
            fileNum = '0' + fileNum;
        }

        var fileName = fileNum + '_' + pro_title.split(' ').join('_') + '.md';

        fs.readFile('template.md', 'UTF8', function(err, data) {
            if (err) {
                throw err;
            }
            var template = data;
            template = template.replace(/{title}/g, title);
            template = template.replace(/{desc}/g, desc);
            fs.writeFile(fileName, template, function(err) {
                if (err) {
                    throw err;
                }
                console.log('生成文件完毕');
            });
        });
    });
});
