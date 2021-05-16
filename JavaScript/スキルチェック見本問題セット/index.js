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
    returnFizzBuzz(lines[0]);
});

// 掛け算
// let multiplication = () => lines[0] * lines[1];

// 足し算
// let addition = () => lines.map(Number).reduce((a, b) => a + b);

// 一番小さい値
// let minimumValue = () => Math.min.apply(null, lines);
// let minimumValue = () => lines.reduce((a, b) => (a < b ? a : b)); 
// let minimumValue = () => lines.sort((a, b) => (a - b)); 

// 文字の一致
// let isCharacterMatch = (a, b) => a == b ? 'OK' : 'NG';

// Fizz Buzz
let returnFizzBuzz = n => {
    for (let i = 1; i <= n; i++) {
        var result = i % 3 === 0 && i % 5 === 0 ? 'Fizz Buzz'
                                                : i % 3 === 0 ? 'Fizz'
                                                : i % 5 === 0 ? 'Buzz'
                                                : i;
        console.log(result);
    }
};