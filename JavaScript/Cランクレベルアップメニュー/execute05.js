// 辞書の基本
function execute01() {
    // 標準入力
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    var lines = [];
    var reader = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    reader.on('line', (line) => {
        lines.push(line);
    });

    reader.on('close', () => {
        lines.shift();
        var lastStr = lines.slice(-1);
        lines.pop();

        var obj = {};

        lines.forEach(line => {
            var str = line.split(' ');
            obj[str[0]] = str[1];
        })

        console.log(obj[lastStr]);
    });
}

exports.execute01 = execute01;