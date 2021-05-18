// 標準入力
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    var nums = line.split(" ")
    for (var i = 0; i < nums.length; i++) {
        lines.push(parseInt(nums[i]));
    }
});

reader.on('close', () => {
    
});

// Excute01();

// Excute02();

// Excute03();

// Excute04(lines[0], lines[1]);

// Excute05();

// Excute06();

// 掛け算
function Excute01() {
    reader.on('line', (line) => {
        lines.push(parseInt(line));
    });

    reader.on('close', () => {
        console.log(multiplication());
    });
}

let multiplication = () => lines[0] * lines[1];

// 足し算
function Excute02() {
    reader.on('line', (line) => {
        lines.push(parseInt(line));
    });

    reader.on('close', () => {
        console.log(addition());
    });
}

let addition = () => lines.map(Number).reduce((a, b) => a + b);

// 一番小さい値
function Excute03() {
    reader.on('line', (line) => {
        lines = line.split(" ")
    });

    reader.on('close', () => {
        console.log(minimumValue());
    });
}
let minimumValue = () => Math.min.apply(null, lines);
// let minimumValue = () => lines.reduce((a, b) => (a < b ? a : b)); 
// let minimumValue = () => lines.sort((a, b) => (a - b)); 

// 文字の一致
function Excute04() {
    reader.on('line', (line) => {
        lines = line.split(" ")
    });

    reader.on('close', () => {
        console.log(isCharacterMatch(lines[0], lines[1]));
    });
}

let isCharacterMatch = (a, b) => a === b ? 'OK' : 'NG';

// Fizz Buzz
function Excute05() {

    reader.on('line', (line) => {
        lines.push(parseInt(line));
    });

    reader.on('close', () => {
        returnFizzBuzz(lines[0]);
    });

    let returnFizzBuzz = n => {
        for (let i = 1; i <= n; i++) {
            var result = i % 3 === 0 && i % 5 === 0 ? 'Fizz Buzz'
                : i % 3 === 0 ? 'Fizz'
                    : i % 5 === 0 ? 'Buzz'
                        : i;
            console.log(result);
        }
    };
}

// 長テーブルのうなぎ屋
function Excute06() {
    // 座席
    var seats = new Array(lines[0]).fill(0);

    // 人数と開始番号
    var NumberOfPeopleAndStartNumber = lines.splice(2, lines[1] * 2);

    // 人数
    var peoples = NumberOfPeopleAndStartNumber.filter(function (value, index) {
        if (index % 2 === 0) {
            return value;
        }
    });

    // 開始番号
    var startNumbers = NumberOfPeopleAndStartNumber.filter(function (value, index) {
        if (index % 2 === 1) {
            return value;
        }
    }).map((a) => a - 1);

    // グループ数分座席に座る処理
    for (var i = 0; i < NumberOfPeopleAndStartNumber.length / 2; i++) {
        var sitting = false;
        // 座席の確認
        for (var x = 0; x < peoples[i]; x++) {
            if (seats[startNumbers[i]] + x > seats.length) {
                if (seats[0] === 1) {
                    sitting = true;
                    break;
                }
            } else {
                if (seats[startNumbers[i] + x] === 1) {
                    sitting = true;
                    break;
                }
            }
        }

        // 座先確定
        if (!sitting) {
            for (var y = 0; y < peoples[i]; y++) {
                if (seats[startNumbers[i]] + y > seats.length) {
                    seats[0] = 1;
                } else {
                    seats[startNumbers[i] + y] = 1;
                }
            }
        }
    }
    // 座席に座っている人数
    console.log(seats.reduce((sum, num) => sum + num, 0));
}