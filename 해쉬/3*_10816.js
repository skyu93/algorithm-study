const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

const map = new Map()
input[1]
    .split(' ')
    .forEach(num => {
        map.set(num, (map.get(num) ?? 0) + 1)
})


console.log(
    input[3]
        .split(' ')
        .reduce((a, b) => {
            return `${a + (map.get(b) ?? 0)}\n`
        }, '')
        .trim()
)
