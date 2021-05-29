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

// 数字の文字列操作（基本）
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

// 数字の文字列操作（0埋め）
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
        lines.push(parseInt(line));
    });

    reader.on('close', () => {

        var result = 10 > lines[0] ? "00" + lines[0] :
            99 > lines[0] ? "0" + lines[0] : lines[0];
        console.log(result);
    });
}

// 数字の文字列操作（時刻1）
function execute05() {
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

        var splitTime = lines[0].split(':');

        var hour = splitTime[0][0] === '0' ? splitTime[0][1] : splitTime[0];

        var minutes = splitTime[1][0] === '0' ? splitTime[1][1] : splitTime[1];

        console.log(hour + '\n' + minutes);
    });
}

// 数字の文字列操作（時刻2）
function execute06() {
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

        var splitTime = lines[0].split(':');

        var hour = splitTime[1] > 29 ? ("00" + (parseInt(splitTime[0]) + 1)).slice(-2) : splitTime[0];

        var minutes = splitTime[1] > 29 ? ("00" + (parseInt(splitTime[1]) - 30)).slice(-2) : parseInt(splitTime[1]) + 30;

        console.log(hour + ':' + minutes);
    });
}

// 文字列 FINAL問題
function execute07() {
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

        var sp;
        var startTime;
        var hour;
        var minutes;

        var resultHour;
        var resultMinutes;

        var splitTime;

        lines.shift();

        lines.forEach(line => {
            sp = line.split(' ');
            startTime = sp[0];
            hour = parseInt(sp[1]);
            minutes = parseInt(sp[2]);

            splitTime = startTime.split(':').map(Number);

            resultHour = splitTime[1] + minutes > 59 ? ("00" + (splitTime[0] + 1 + parseInt(hour))).slice(-2) : ("00" + (splitTime[0] + hour)).slice(-2);

            if (resultHour > 23) {
                resultHour = ("00" + (parseInt(resultHour) - 24)).slice(-2);
            }

            resultMinutes = splitTime[1] + minutes > 59 ? ("00" + (splitTime[1] + minutes - 60)).slice(-2) : ("00" + (splitTime[1] + minutes)).slice(-2);
            console.log(resultHour + ':' + resultMinutes);
        });
    });
}

exports.execute01 = execute01;
exports.execute02 = execute02;
exports.execute03 = execute03;
exports.execute04 = execute04;
exports.execute05 = execute05;
exports.execute06 = execute06;
exports.execute07 = execute07;