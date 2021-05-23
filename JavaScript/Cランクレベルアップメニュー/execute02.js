// 整数と文字列
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
        lines.forEach(line => { console.log(line.length); });
    });
}

exports.execute01 = execute01;