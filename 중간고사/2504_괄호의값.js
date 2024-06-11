const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

const stack = []
Array(...input[0]).forEach(s => {
    if (s === ')') {
        let temp = 0;
        while (stack.length > 0) {
            let top = stack.pop();
            if (top === '(') {
                if (temp === 0) {
                    stack.push(2);
                } else {
                    stack.push(2 * temp);
                }
                break;
            } else if (typeof top === 'number') {
                temp += top;
            }
        }
    } else if (s === ']') {
        let temp = 0;
        while (stack.length > 0) {
            let top = stack.pop();
            if (top === '[') {
                if (temp === 0) {
                    stack.push(3);
                } else {
                    stack.push(3 * temp);
                }
                break;
            } else if (typeof top === 'number') {
                temp += top;
            }
        }
    } else {
        stack.push(s)
    }
})

console.log(stack.reduce((a,c) => a + c, 0))



