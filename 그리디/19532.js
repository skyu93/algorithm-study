const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const [a, b, c, d, e, f] = input.map(Number);

let x, y;
for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
        if (a * i + b * j === c && d * i + e * j === f) {
            x = i;
            y = j;
            break;
        }
    }
    if (x !== undefined) break;
}

console.log(x, y);
