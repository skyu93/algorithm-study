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

let count = 0
for(let i = 1; i < input.length; i++) {
    const str = input[i]
    if(str.length % 2 !== 0) continue

    const stack = new Stack()
    for(let j = str.length - 1; j > -1; j--) {
        if(stack.peek() === str[j]) {
            stack.pop()
        }else {
            stack.push(str[j])
        }
    }

    if(stack.size() === 0) {
        count += 1
    }
}
console.log(count)

