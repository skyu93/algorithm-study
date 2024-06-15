const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}
class Deque {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    addFront(data) {
        const node = new Node(data);
        if (this.size === 0) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }
    removeFront() {
        const { next, data } = this.head
        if(next) {
            next.prev = null
            this.head = next
        }
        this.size--
        return data
    }
    addRear(data) {
        const node = new Node(data)
        if (this.size === 0) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
}

const deque = new Deque()
Array.from( { length: input[0] }).forEach((_, i) =>{
    deque.addRear(i+1)
})
while (deque.size > 1) {
    deque.removeFront()
    deque.addRear(deque.removeFront())
}
console.log(deque.head.data)
