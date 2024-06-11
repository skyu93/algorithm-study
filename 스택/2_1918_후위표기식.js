const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

let stack = []
let answer = ''
Array(...input[0]).forEach(str => {
    if (str === '(') {
        stack.push(str);
    } else if (str === ')') {
        // 스택에서 여는 괄호를 만날 때까지 팝하여 결과에 추가
        while (stack.length && stack[stack.length - 1] !== '(') {
            answer += stack.pop();
        }
        // 여는 괄호를 스택에서 제거
        stack.pop();
    } else if (str === '*' || str === '/') {
        // 스택의 탑에 곱셈 또는 나눗셈 연산자가 있으면 팝하여 결과에 추가
        // 동일한 우선순위의 연산자('*'나 '/')가 스택의 탑에 있는 동안 팝하여 결과에 추가합니다.
        while (stack.length && (stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/')) {
            answer += stack.pop();
        }
        // 현재 연산자를 스택에 추가
        stack.push(str);
    } else if (str === '+' || str === '-') {
        // 여는 괄호 '('를 만날 때까지 스택에서 팝하여 결과에 추가합니다.
        // 이는 덧셈과 뺄셈이 곱셈과 나눗셈보다 낮은 우선순위를 갖기 때문입니다.
        while (stack.length && stack[stack.length - 1] !== '(') {
            answer += stack.pop();
        }
        // 현재 연산자를 스택에 추가
        stack.push(str);
    } else {
        answer += str;
    }
})
// 스택에 남아 있는 모든 연산자를 팝하여 결과에 추가
while (stack.length) {
    answer += stack.pop();
}
console.log(answer)


