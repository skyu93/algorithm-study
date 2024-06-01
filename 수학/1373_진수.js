const fs = require('fs')
const input = fs.readFileSync('../example.txt').toString().trim().split('\n')

const num = input[0]
let result = ''
const getNum = (idx) => num[idx] ?? ''

for(let i = num.length-1; i > -1; i-=3) {
    const octalNum = parseInt(`${getNum(i-2)}${getNum(i-1)}${getNum(i)}`,2).toString(8)
    result = octalNum + result
}
console.log(result)

