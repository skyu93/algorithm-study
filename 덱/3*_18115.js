const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

class Node {
    constructor(value) {
        this.value = value
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

    addFront(value) {
        const node = new Node(value)
        if(this.size === 0) {
            this.head = this.tail = node
        }else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    addRear(value) {
        const node = new Node(value)
        if(this.size === 0) {
            this.head = this.tail = node
        }else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    addFrontNext(value) {
        if(this.size < 1) return
        const node = new Node(value)

        node.prev = this.head;
        node.next = this.head.next;
        if (this.head.next) {
            this.head.next.prev = node;
        } else {
            this.tail = node;
        }
        this.head.next = node;
        this.size++
    }
    print() {
        if(this.size === 0) return ''
        let node = this.head
        let size = this.size
        let result = ''
        while (size--) {
            result += ` ${node.value}`
            node = node.next
        }
        return result.trim()
    }
}

const cards = Array
    .from({ length: Number(input[0]) })
    .map((_, i) => i + 1)
const deque = new Deque()

input[1]
    .split(' ')
    .reverse()
    .forEach((s, i) => {
        const card = cards[i]
        if(s === '1') {
            deque.addFront(card)
        } else if(s === '2') {
            deque.addFrontNext(card)
        } else if(s === '3') {
            deque.addRear(card)
        }
})

console.log(deque.print())
