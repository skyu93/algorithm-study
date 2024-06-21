const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')

input.shift()
const list = input
    .map(i => Number(i.split(' ')[1]))

const result = []
let min = Infinity
for(let i = 0; i < list.length; i++){
    let sum = 0
    for(let j = 0; j < list.length; j++){
        if(i === j) continue
        sum += list[j] * Math.abs(i - j)
    }
    min = Math.min(min, sum)
    result.push(sum)
}
console.log(result.indexOf(min) + 1)
