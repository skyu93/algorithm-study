const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')

input.shift()
let i = 0
console.log(
    input.map(Number)
    .sort((a, b) => b - a)
    .reduce((a, b) => {
        const tip = b - i
        i += 1
        return a + (tip > 0 ? tip : 0)
    }, 0)
)
