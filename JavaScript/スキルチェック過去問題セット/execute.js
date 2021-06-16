// 単語のカウント
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

        var words = lines[0].split(' ');

        var aggregateWords = {};
        words.forEach(word => {
            if (!aggregateWords[word]) {
                aggregateWords[word] = 1;
            } else {
                aggregateWords[word] += 1;
            }
        });
        Object.keys(aggregateWords).forEach(key => {
            console.log(`${key} ${aggregateWords[key]}`);
        });
    });
}

// 検索履歴
// 単語のカウント
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

        var words = [];

        for (var i = 0; i < lines.length; i++) {


            if (words.includes(lines[i])) {
                var index = words.indexOf(lines[i]);
                words.splice(index, 1);
                words.unshift(lines[i]);
            } else {
                words.unshift(lines[i]);
            }
        }

        words.forEach(word => console.log(word));

    });
}

// 宝くじ
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

        // 当選番号
        let winningNumber = lines[0];

        lines.shift();
        lines.shift();

        var results = lines.map(number => {

            if (winningNumber === '100000' && parseInt(winningNumber) + 1 === parseInt(number)) {
                return 'adjacent';
            }

            if (winningNumber === '199999' && parseInt(winningNumber) - 1 === parseInt(number)) {
                return 'adjacent';
            }

            var result = winningNumber === number ? "first"
                : parseInt(winningNumber) + 1 === parseInt(number) || parseInt(winningNumber) - 1 === parseInt(number) ? "adjacent"
                    : winningNumber.slice(-4) === number.slice(-4) ? "second"
                        : winningNumber.slice(-3) === number.slice(-3) ? "third"
                            : "blank";

            return result;
        });

        results.forEach(result => console.log(result));
    });
}

exports.execute01 = execute01;
exports.execute02 = execute02;
exports.execute03 = execute03;