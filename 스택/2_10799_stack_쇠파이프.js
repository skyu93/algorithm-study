const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

const array = input[0]
const stack = []
let result = 0

for(let i = 0; i < array.length; i++) {
    const bracket = array[i]
    if (bracket === '(') {
        stack.push(bracket);
    } else {
        // 현재 문자가 ')'인 경우 스택에서 '('를 제거합니다.
        stack.pop();
        // 이전 문자가 '('인 경우 레이저
        if (array[i - 1] === '(') {
            // 레이저인 경우, 스택의 현재 크기만큼 잘린 조각을 추가합니다.
            result += stack.length;
            console.log(result, stack)
        } else {
            // 쇠막대기의 끝인 경우, 잘린 조각을 하나 추가합니다.
            result += 1;
            console.log(result, stack)
        }

    }
}
console.log(result)
