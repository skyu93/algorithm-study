const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

class Queue {
    index = 0 // 처음을 가르키는 인덱스
    array = []
    constructor() {
    }
    lastIndex() {
        return this.array.length - 1
    }
    empty() {
        return this.size() === 0 ? 1 : 0
    }
    size() {
        // ex) 실제 데이터: [undefined,undefined,3,6,7]
        // length(5), index === 2인 경우 실제로 데이터는 3개 (3,6,7)
        return this.array.length - this.index
    }
    push(data) {
        // 배열에 실제로 데이터는 있지만 사용 가능한 데이터가 비어 있는 경우
        if(this.empty()) {
            // 처음을 가르키는 인덱스를 초기화
            this.index = this.array.length
        }
        this.array.push(Number(data))
    }
    pop() {
        if(this.empty()) return -1
        const value = this.front()
        this.array[this.index] = undefined
        this.index += 1
        return value
    }
    front() {
        if(this.empty()) return -1
        return this.array[this.index]
    }
    back() {
        if(this.empty()) return -1
        return this.array[this.lastIndex()]
    }
}
const queue = new Queue()
let result = ''
const execute = (command, data) => {
    switch (command) {
        case 'push':
            return queue.push(data)
        case 'empty':
            return queue.empty()
        case 'pop':
            return queue.pop()
        case 'size':
            return queue.size()
        case 'front':
            return queue.front()
        case 'back':
            return queue.back()
    }
}
for(let i = 1; i < input.length; i++) {
    const [command, data] = input[i].split(' ')
    const r = execute(command, data)
    if(r !== undefined) result += `${r}\n`
}
console.log(result.trim())
