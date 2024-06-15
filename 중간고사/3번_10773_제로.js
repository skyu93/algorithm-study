const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

const [_, ...rows] = input
const stack = []
rows.forEach(num => {
    if(num === '0') {
        stack.pop()
    }else{
        stack.push(Number(num))
    }
})
console.log(stack.reduce((prev, curr) => prev + curr, 0))

