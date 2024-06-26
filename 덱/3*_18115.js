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
        this.size += 1
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
        this.size += 1
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

        this.size += 1
    }
    print() {
        if(this.size === 0) return ''
        let node = this.head
        let result = ''
        while (node) {
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
    .reverse() // 복구하기 위해 역순
    .forEach((s, i) => {
        const card = cards[i]
        if(s === '1') {
            // 제일 위의 카드 1장을 바닥에 내려놓는다.
            deque.addFront(card) // 제일 아래 카드를 둔다
        } else if(s === '2') {
            // 위에서 두 번째 카드를 바닥에 내려놓는다
            deque.addFrontNext(card) // 제일 아래에서 두번째에 카드를 둔다.
        } else if(s === '3') {
            // 제일 밑에 있는 카드를 바닥에 내려놓는다.
            deque.addRear(card) // 제일 위에 카드를 둔다.
        }
})

console.log(deque.print())
