const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

class Node {
    data = null
    prev = null
    next = null
    constructor(data) {
        this.data = data
    }
}
class LinkedList {
    count = 0
    constructor() {
        this.currentNode = null
    }
    prev() {
        if(!this.currentNode) return
        this.currentNode = this.currentNode.prev
    }
    next() {
        if(!this.currentNode) return
        this.currentNode = this.currentNode.next
    }
    append(data) {
        this.count += 1
        const node = new Node(data)

        if(!this.currentNode) {
            node.prev = node
            node.next = node
            this.currentNode = node
            return
        }

        node.prev = this.currentNode
        node.next = this.currentNode.next

        const { prev, next } = this.currentNode
        prev.next = this.currentNode
        next.prev = node

        this.currentNode.next = node
        this.currentNode = node
    }
    delete() {
        this.count -= 1
        const { prev, next } = this.currentNode
        prev.next = next
        next.prev = prev
        this.currentNode = prev
    }
    print() {
        let result = ''
        let node = this.currentNode
        for(let i = 0; i < this.count; i++) {
            result += node.data
            node = node.prev
        }
        return result
    }
}

function solveWheel(N, K, commands) {
    let wheel = new LinkedList();
    for (let i = 0; i < N; i++) {
        wheel.append('?');
    }

    let position = 0;
    let isPossible = true;
    let letterMap = new Map();

    for (let i = 0; i < K; i++) {
        const [S, T] = commands[i];
        position = (position - S + N) % N;

        // Move to the current position
        for (let j = 0; j < position; j++) {
            wheel.prev();
        }
        for (let j = position; j > 0; j--) {
            wheel.next();
        }

        const currentChar = wheel.currentNode.data;

        if (currentChar === '?') {
            if (letterMap.has(T) && letterMap.get(T) !== position) {
                isPossible = false;
                break;
            }
            wheel.currentNode.data = T;
            letterMap.set(T, position);
        } else if (currentChar !== T) {
            isPossible = false;
            break;
        }
    }

    if (!isPossible) {
        return '!';
    } else {
        let result = '';
        let node = wheel.currentNode;
        for (let i = 0; i < N; i++) {
            result = node.data + result;
            node = node.prev;
        }
        return result;
    }
}

const [firstLine, ...commands] = input
const [N, K] = firstLine.split(' ')
console.log('teo', solveWheel(Number(N), Number(K), commands))

