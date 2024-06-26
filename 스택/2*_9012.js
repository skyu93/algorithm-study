const fs = require('fs')
const input = fs.readFileSync('../example.txt').toString().trim().split('\n')

class Stack {
    array = []
    constructor() {
    }

    pop(){
        return this.array.pop()
    }
    peek(){
        if(this.isEmpty()) return
        return this.array[this.size() - 1]
    }
    push(data){
        return this.array.push(data)
    }
    size() {
       return this.array.length
    }
    clear() {
        this.array = []
    }
    isEmpty() {
        return this.array.length <= 0
    }
}
let result = ''
const isVPS = (str) => {
    const stack = new Stack()
    for (let i = 0; i < str.length; i++) {
        const s = str[i]
        if(s === '(')
            stack.push(str[i])
        else {
            if(stack.peek() === '(') {
                // 괄호의 쌍 확인
                stack.pop()
            }else {
                stack.push(str[i])
            }
        }
    }
    // 스택이 모두 비어졌다면 올바른 괄호 문자열
    return stack.size() === 0
}
for(let i = 1; i < input.length; i++) {
    result += `${isVPS(input[i]) ? 'YES' : 'NO'}\n`
}
console.log(result.trim())
