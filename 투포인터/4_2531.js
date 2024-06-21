const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
const condition = input.shift().split(' ')
const k = Number(condition[2])
const c = condition[3]
let max = 0
const map = new Map()
for(let i = 0; i < input.length + k - 1; i++) {
    const index = i % input.length
    if(map.size < k) {
        map.set(input[index], input[index])
    }else {
        map.delete(input[index - k])
    }
    console.log(
        input[i - k - 1]
    )
    max = Math.max(max, map.size)
}
console.log(max)

