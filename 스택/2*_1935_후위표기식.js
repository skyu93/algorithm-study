const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

const calculator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}
const str = input[1]
const map = new Map(
    Array.from(str)
        .filter(s => !(s in calculator))
        .map(s => {
            const index = s.charCodeAt(0) - 65 // A: 65
            return [s, Number(input[index + 2])]
        })
)
const stack = []
for(let i = 0; i < str.length; i++) {
    const s = str[i]
    if(s in calculator) {
        const num1 = stack.pop()
        const num2 = stack.pop()
        const result = calculator[s](num2, num1)
        stack.push(result)
    }else {
        stack.push(map.get(s))
    }
}
console.log(stack[0].toFixed(2))

