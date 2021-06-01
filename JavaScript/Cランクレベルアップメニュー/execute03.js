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

        var nums = lines.filter(value => {
            return parseInt(value);
        });

        lines.filter(value => {
            return !nums.includes(value);
        }).forEach(value => {
            if (value.length === 1) {
                letters.push(value);
            } else {
                strings.push(value);
            }
        });
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

exports.execute01 = execute01;
exports.execute02 = execute02;
exports.execute03 = execute03;
exports.execute04 = execute04;