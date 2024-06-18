const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')

let money = Number(input[0])
let coin_5 = Math.trunc(money / 5)
let result = -1
while (coin_5 > -1){
    const calc = money - (5 * coin_5)
    if(calc % 2 === 0){
        result = coin_5 + calc / 2
        break
    }
    coin_5 -= 1
}

console.log(result)
