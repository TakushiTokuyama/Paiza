// 文字列

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

// 部分文字列
function execute02() {
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
        if (lines[1].includes(lines[0])) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    });
}

// 数字の文字列操作
function execute03() {
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
        var numbers = lines[0].split('').map(Number);
        var a = numbers[0] + numbers[3];
        var b = numbers[1] + numbers[2];
        console.log(String(a) + String(b));
    });
}

exports.execute01 = execute01;
exports.execute02 = execute02;
exports.execute03 = execute03;