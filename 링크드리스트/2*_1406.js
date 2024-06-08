const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

let str = input[0]

class Node {
    data = null
    prev = null
    next = null
    constructor(data) {
        this.data = data
    }
}
class LinkedList {
    head = null
    currentNode = null
    constructor() {
        this.head = new Node(null);
        this.currentNode = this.head;
    }
    prev() {
        if(!this.currentNode.prev) return
        this.currentNode = this.currentNode.prev
    }
    next() {
        if(!this.currentNode.next) return
        this.currentNode = this.currentNode.next
    }
    push(data) {
        const node = new Node(data)
        node.prev = this.currentNode;  // 새로운 노드의 prev를 현재 노드로 설정
        node.next = this.currentNode.next;  // 새로운 노드의 next를 현재 노드의 next로 설정

        if (this.currentNode.next !== null) {
            // 중간에 있는 데이터인 경우 다음 노드의 prev는 새로운 노드
            this.currentNode.next.prev = node;
        }

        this.currentNode.next = node;  // 현재 노드의 next를 새로운 노드로 설정
        this.currentNode = node;  // 현재 노드를 새로운 노드로 업데이트
    }
    delete() {
        if (this.currentNode === this.head) return
        const prevNode = this.currentNode.prev;
        const nextNode = this.currentNode.next;

        if (nextNode !== null) {
            nextNode.prev = prevNode;  // 다음 노드의 prev를 이전 노드로 설정
        }
        if (prevNode !== null) {
            prevNode.next = nextNode;  // 이전 노드의 next를 다음 노드로 설정
        }

        this.currentNode = prevNode;  // 현재 노드를 이전 노드로 업데이트
    }
    print() {
        let result = '';
        let node = this.head.next;
        while (node) {
            result += node.data;
            node = node.next;
        }
        return result
    }
}
const linkedList = new LinkedList()
for(let i = 0; i < str.length; i++){
    linkedList.push(str[i])
}

for(let i = 2; i < input.length; i++) {
    const [command, data] = input[i].split(' ')
    switch (command) {
        case 'L':
            linkedList.prev()
            break
        case 'D':
            linkedList.next()
            break
        case 'B':
            linkedList.delete()
            break
        case 'P':
            linkedList.push(data)
            break
    }
}
console.log(linkedList.print())
