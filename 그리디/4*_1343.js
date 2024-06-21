const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')


const dots = []
const board = input[0].replaceAll(/[.]+/g, dot => {
    dots.push(dot)
    return '|'
}).split('|')

const repeat = (size, str) => {
    let result = ''
    while (size--) {
        result += str
    }
    return result
}
let result = ''
for(let i = 0; i < board.length; i++) {
    const value = board[i]
    if(value.length % 2 !== 0) {
        console.log(-1)
        return
    }

    if(value.length % 4 === 0) {
        result += repeat(value.length / 4, 'AAAA')
    } else {
        const countA = Math.trunc(value.length / 4)
        result += repeat(countA, 'AAAA')
        const countB = (value.length % 4) / 2
        result += repeat(countB, 'BB')
    }
    result += dots[i] ?? ''
}
console.log(result)
