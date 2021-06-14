// 昇順ソート
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

        var nums = lines.map(Number);

        var result = [0];

        for (var x = 0; x < nums.length; x++) {
            for (var y = 0; y < result.length; y++) {
                if (x === 0) {
                    result[0] = nums[0];
                    break;
                }

                if (nums[x] < result[y]) {
                    result.splice(y, 0, nums[x]);
                    break;
                }
            }

            if (x === 0) {
                continue;
            }

            if (result.length !== x + 1) {
                result.push(nums[x]);
            }
        }
        result.forEach(value => console.log(value));
    });
}

// 昇順ソート
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

        var nums = lines.map(Number);

        var result = [0];

        for (var x = 0; x < nums.length; x++) {
            for (var y = 0; y < result.length; y++) {
                if (x === 0) {
                    result[0] = nums[0];
                    break;
                }

                if (nums[x] > result[y]) {
                    result.splice(y, 0, nums[x]);
                    break;
                }
            }

            if (x === 0) {
                continue;
            }

            if (result.length !== x + 1) {
                result.push(nums[x]);
            }
        }
        result.forEach(value => console.log(value));
    });
}

exports.execute01 = execute01;
exports.execute02 = execute02;