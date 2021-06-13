// 3の倍数のカウント
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

        var nums = lines[0].split(' ');
        var count = 0;
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] % 3 === 0) {
                count++;
            }
        }
        console.log(count);
    });
}

// フラグ管理
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

        var incSeven = 'NO';

        for (var i = 0; i < lines.length; i++) {
            if (parseInt(lines[i]) === 7) {
                incSeven = 'YES';
                break;
            }
        }
        console.log(incSeven);
    });
}

// インデックス取得
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
        lines.push(parseInt(line));
    });

    reader.on('close', () => {

        lines.shift();
        var lastNum = lines.slice(-1)[0];

        for (var i = 0; i < lines.length; i++) {
            if (lines[i] === lastNum) {
                console.log(i + 1);
                break;
            }
        }
    });
}

// 多重ループ
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
        // 文字
        var letters = [];
        // 文字列
        var strings = [];

        for (var i = 0; i <= parseInt(lines[0]); i++) {
            if (i === 0) {
                continue;
            }
            letters.push(lines[i]);
        }

        for (var o = 0; o < lines.length; o++) {
            if (o <= letters.length + 1) {
                continue;
            }
            strings.push(lines[o]);
        }

        for (var x = 0; x < strings.length; x++) {
            for (var y = 0; y < letters.length; y++) {
                if (strings[x].includes(letters[y])) {
                    console.log('YES');
                } else {
                    console.log('NO');
                }
            }
        }
    });
}

// 多重ループ
function execute04Test() {
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

        const fs = require('fs');

        var testData = fs.readFileSync('testCase.txt').toString();
        var testArrayData = testData.split('\n').filter(value => value !== '50');

        var testLetters = testArrayData.filter((value, index) => index < 50);
        var testStrings = testArrayData.filter((value, index) => index > 49);

        var testResultData = fs.readFileSync('testResult.txt').toString();

        var testResultArrayData = testResultData.split('\n');

        var result;
        var count = 0;

        for (var x = 0; x < testStrings.length; x++) {
            for (var y = 0; y < testLetters.length; y++) {

                if (testStrings[x].includes(testLetters[y])) {
                    result = 'YES';
                } else {
                    result = 'NO';
                }

                if (testResultArrayData[count] !== result) {
                    console.log(`${count} : ${result}`);
                }
                count++;
            }
        }
    });
}

// forループ
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
        var question = lines[0].split(' ');

        // people
        var N = parseInt(question[0]);

        var M = parseInt(question[1]);

        var K = question[2];

        // first case delete
        lines.shift();

        var result = [];
        var count = 0;
        for (var x = 0; x < N; x++) {
            var datas = lines[x].split(' ');
            for (var i = 0; i < M; i++) {
                if (datas[i] === K) {
                    count++;
                }
            }
            result.push(count);
            count = 0;
        }
        result.forEach(value => console.log(value));
    });
}

exports.execute01 = execute01;
exports.execute02 = execute02;
exports.execute03 = execute03;
exports.execute04 = execute04;
exports.execute04Test = execute04Test;
exports.execute05 = execute05;