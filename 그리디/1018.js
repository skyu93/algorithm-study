const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = Infinity
const [M, N] = input.shift().split(' ').map(Number)
const chess1 = []
const chess2 = []
for(let i = 0; i < 8; i++) {
    chess1.push(i % 2 !== 0 ? 'BW'.repeat(4) : 'WB'.repeat(4))
    chess2.push(i % 2 === 0 ? 'BW'.repeat(4) : 'WB'.repeat(4))
}

for(let a = 0; a <= M - 8; a++) {
    for(let b = 0; b <= N - 8; b++) {
        let count1 = 0
        let count2 = 0
        for(let i = 0; i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                const currentChar = input[a + i][b + j]
                if(currentChar !== chess1[i][j]) count1 += 1
                if(currentChar !== chess2[i][j]) count2 += 1
            }
        }
        result = Math.min(result, count1, count2)
    }
}
console.log(result)


