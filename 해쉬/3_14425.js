const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

const [N,M] = input[0].split(' ')
const map = new Map()
let idx = 1
let result = 0
for(; idx <= Number(N); idx++) {
    map.set(input[idx], input[idx])
}
for(; idx <= input.length; idx++) {
    if(map.has(input[idx])) {
        result += 1
    }
}
console.log(result)

