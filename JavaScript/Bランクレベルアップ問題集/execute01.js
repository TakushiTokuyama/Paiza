// インクリメント
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

        console.log(parseInt(lines[0]) + 1);
    });
}

// 複数行の入力と出力
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
        lines.shift();
        lines.forEach((line) => {
            console.log(line);
        });
    });
}

// 配列（リスト）要素の合計 
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
        let numberList = [1, 3, 5, 6, 3, 2, 5, 23, 2];
        let sum = numberList.reduce((list, number) => {
            return list += number;
        });
        console.log(sum);
    });
}

// 5以上か4以下か
function execute04() {
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
        if (parseInt(lines[0]) >= 5) {
            console.log('high');
        } else {
            console.log('low');
        }
    });
}

exports.execute01 = execute01;
exports.execute02 = execute02;
exports.execute03 = execute03;
exports.execute04 = execute04;