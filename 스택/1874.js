const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

const stack = []
let index = 1
let result = ''

const popStack = () => {
    // 스택의 마지막 값과 현재 입력값이 같은지 확인하는 함수
    const isLastItemEqual = () => {
        return stack[stack.length - 1] === Number(input[index])
    }

    // 스택의 최상단 값이 주어진 수열의 현재 값과 일치하면 pop한다.
    while (stack.length > 0 && isLastItemEqual()) {
        index++ // 다음 입력값을 비교하기 위해 인덱스 이동
        result += '-\n'
        stack.pop()
    }
}

for (let i = 1; i < Number(input[0]) + 1; i++) {
    popStack() // 먼저 스택(오른차순 수열)에서 값을 꺼낼 수 있는지 확인
    result += '+\n'
    stack.push(i) // 스택에 1부터 n까지에 수에 대해 푸쉬
}
popStack() // 마지막으로 남아있는 값을 처리

// 모든 수열 값을 처리한 후 스택이 비어있으면 주어진 수열을 만들 수 있고
// 스택이 남아 있으면 만들 수 없음
console.log(stack.length > 0 ? 'NO' : result)
