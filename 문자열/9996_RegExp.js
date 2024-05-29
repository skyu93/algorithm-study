const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().split('\n');
//< /dev/stdin
const length = Number(input[0])
const pattern = new RegExp(`^${input[1].replace('*', '.*')}$`)
const answer = (str) => pattern.test(str) ? 'DA' : 'NE'
for(let i = 2; i < 2 + length; i++) {
    console.log(answer(input[i]))
}
