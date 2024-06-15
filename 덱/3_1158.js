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
    addFront(value){
        const node = new Node(value)
        if(this.size === 0) {
            this.head = this.tail = node
        }else{
            node.next = this.head // 1. 새로운 노드 먼저 연결하기
            this.head.prev = node // 2. 기존 head는 뒤로 가기 때문에 새로운 노드가 앞에 오게 된다.
            this.head = node // 3. head 갱신
        }
        this.size += 1
    }
    removeFront() {
        if(this.size === 0) return null

        const { value, next } = this.head

        if(next) {
            // 다음 노드가 있으면
            next.prev = null
            this.head = next
        }else {
            // 다음 노드가 없으면
            this.head = this.tail
        }
        this.size -= 1
        return value
    }
    addRear(value) {
        const node = new Node(value)
        if(this.size === 0) {
            this.head = this.tail = node
        }else{
            node.prev = this.tail // 1. 새로운 노드 먼저 연결하기
            this.tail.next = node // 2. 기존 tail는 앞으로 가기 때문에 새로운 노드가 앞에 오게 된다.
            this.tail = node // 3. tail 갱신
        }
        this.size += 1
    }
    removeRear() {
        if(this.size === 0) return null
        const { value, prev } = this.tail

        if(prev) {
            // 앞 노드가 있으면
            prev.next = null
            this.tail = prev
        }else {
            // 앞 노드가 없으면
            this.tail = this.head
        }
        this.size -= 1
        return value
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) return null;
        if (index === 0) return this.removeFront();
        if (index === this.size - 1) return this.removeRear();

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        const { value } = current
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.size--;
        return value;
    }

    values() {
        const result = []
        let node = this.tail
        while (node) {
            result.push(node.value)
            node = node.next
        }
        return result
    }
}

const deque = new Deque()
const [N, K] = input[0].split(' ')
Array
    .from({ length: Number(N) })
    .forEach((_, i) => deque.addRear(i+1))

const result = [];
let index = 0
while (deque.size) {
    index = (index + Number(K) - 1)  % deque.size
    result.push(deque.removeAt(index))
}
console.log(`<${result.join(', ')}>`)

// class Deque {
//     constructor() {
//         this.head = null
//         this.current = null
//         this.tail = null
//         this.size = 0
//     }
//     addRear(value) {
//         const node = new Node(value)
//         if(this.size === 0) {
//             this.current = this.head = this.tail = node
//         }else {
//             node.prev = this.tail
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size += 1
//     }
//     removeCurrent() {
//         if (this.size === 0) return null;
//
//         const { prev, next, value } = this.current;
//         if (prev) {
//             prev.next = next;
//         } else {
//             this.head = next;
//         }
//
//         if (next) {
//             next.prev = prev;
//         } else {
//             this.tail = prev;
//         }
//
//         this.size -= 1;
//
//         if (this.size === 0) {
//             this.current = null;
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.current = next ? next : this.head;
//         }
//
//         return value;
//     }
//
//     moveCurrent(k) {
//         if (this.size === 0 || k <= 0) return;
//         while (k--) {
//             this.current = this.current.next ? this.current.next : this.head;
//         }
//     }
// }
//
// const deque = new Deque()
// const [N, K] = input[0].split(' ')
// Array
//     .from({ length: Number(N) })
//     .forEach((_, i) => deque.addRear(i+1))
//
// const result = [];
// while (deque.size) {
//     deque.moveCurrent(Number(K) - 1);  // k-1번 이동하면 k번째 노드에 도달
//     result.push(deque.removeCurrent());
// }
//
// console.log(`<${result.join(', ')}>`)

