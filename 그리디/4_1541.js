const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt';
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

let min = Infinity
const operator = input[0]
    .replaceAll(/\+|-/g, s => {
        return ` ${s} `
    }).split(' ')

const stack = []
for(let i = 0; i < operator.length; i++) {
    if(Number.isInteger(Number(operator[i]))) {
        if(stack[stack.length-1] === '+') {
            stack.pop()
            stack.push(Number(operator[i]) + Number(stack.pop()))
        }else{
            stack.push(Number(operator[i]))
        }
    }else{
        stack.push(operator[i])
    }
}
let result = stack[0]
for(let i = 1; i < stack.length; i++) {
    if(Number.isInteger(Number(stack[i]))) {
        result -= Number(stack[i])
    }
}
console.log(result)
