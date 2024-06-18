const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
const condition = input[0].split(' ')
const k = Number(condition[2])
const c = Number(condition[3])
let max = 0
for(let i = 1; i <= input.length - k ; i++) {
    const map = {}
    if(Number(input[i-1]) === c) {
        map[c] = c
    }
    for(let j = i; j < i + k; j++) {
        const num = Number(input[j])
        map[num] = num
    }
    max = Math.max(max, Object.keys(map).length)
}
console.log(max)
