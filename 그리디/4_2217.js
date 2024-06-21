const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt';
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

const N = Number(input.shift())
const sorted = input.map(Number).sort((a,b) => a - b)
let max = 0
for(let i = N; i > 0; i--) {
    const min = sorted[N-i]
    max = Math.max(max, min * i)
}
console.log(max)
