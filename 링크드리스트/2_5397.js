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
    constructor() {
        this.head = new Node(null)
        this.currentNode = this.head
    }
    prev() {
        if(!this.currentNode.prev) return
        this.currentNode = this.currentNode.prev
    }
    next() {
        if(!this.currentNode.next) return
        this.currentNode = this.currentNode.next
    }
    append(data) {
        const node = new Node(data)
        node.prev = this.currentNode
        node.next = this.currentNode.next

        // 현재 노드에서 다음 노드가 있다면
        if(this.currentNode.next){
            // 이전 노드의 prev를 현재노드와 연결
            this.currentNode.next.prev = node
        }

        // 현재 노드는 새로운 노드의 앞으로 가기 때문에 다음 노드는 현재 노드로 설정
        this.currentNode.next = node

        // 현재 노드는 새로운 노드
        this.currentNode = node
    }
    delete() {
        if(!this.currentNode.prev) return
        const { prev, next } = this.currentNode
        if(prev) {
            prev.next = next
        }
        if(next) {
            next.prev = prev
        }
        this.currentNode = prev
    }
    print() {
        let result = ''
        let node = this.head.next
        while (node){
            result += node.data
            node = node.next
        }
        return result
    }
}
const execute = (linkedList, inputValue) => {
    switch (inputValue) {
        case '<':
            linkedList.prev()
            break
        case '>':
            linkedList.next()
            break
        case '-':
            linkedList.delete()
            break
        default: {
            // 입력
            linkedList.append(inputValue)
        }break
    }
}
input.shift()
input.forEach(i => {
    const linkedList = new LinkedList();

    [...i].forEach(v => {
        execute(linkedList, v)
    })

    console.log(linkedList.print())
})

