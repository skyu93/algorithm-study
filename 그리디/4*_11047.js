const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')

const [_, K] = input.shift().split(' ')
let total = Number(K)
let coin = 0
input.reverse().forEach(v => {
    const won = Number(v)
    const count = Math.floor(total / won)
    if(count > 0) {
        coin += count
        total = total % won
    }
})
console.log(coin)
