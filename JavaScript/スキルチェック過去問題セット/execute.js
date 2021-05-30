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

exports.execute01 = execute01;
exports.execute02 = execute02;