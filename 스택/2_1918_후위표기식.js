const fs = require('fs')
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split('\n')

// 스택은 연산자와 괄호가 들어가게 된다.
let stack = []
let answer = ''
const priority = {
    '*': 1,
    '/': 1,
    '+': 2,
    '-': 2,
    '(': 3,
}
Array(...input[0])
    .forEach(str => {
        if (str === '(') {
            stack.push(str);
        } else if (str === ')') {
            // 괄호는 닫히면 처음 괄호까지 모두 꺼낸다.
            while (stack.length && stack[stack.length - 1] !== '(') {
                answer += stack.pop();
            }
            stack.pop();
        } else if (str in priority) {
            // 스택 맨 위에 있는 값의 우선순위가 높은 경우 모두 뺴준다.
            // 우선순위가 높으면 계속 스택에 넣고 우선순이가 낮으면 빼준다.
            // 즉 +,-,( 값은 우선순위가 높은 *,/ 만나면 모두 제거 된다.
            while (stack.length &&
            priority[str] >= priority[stack[stack.length-1]]) {
                answer += stack.pop();
            }
            stack.push(str);
        } else {
            answer += str;
        }
})
['*', '(']
// Array(...input[0]).forEach(str => {
//     if (str === '(') {
//         stack.push(str);
//     } else if (str === ')') {
//         // 스택에서 여는 괄호를 만날 때까지 팝하여 결과에 추가
//         while (stack.length && stack[stack.length - 1] !== '(') {
//             answer += stack.pop();
//         }
//         // 여는 괄호를 스택에서 제거
//         stack.pop();
//     } else if (str === '*' || str === '/') {
//         // 스택의 탑에 곱셈 또는 나눗셈 연산자가 있으면 팝하여 결과에 추가
//         // 동일한 우선순위의 연산자('*'나 '/')가 스택의 탑에 있는 동안 팝하여 결과에 추가합니다.
//         while (stack.length && (stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/')) {
//             answer += stack.pop();
//         }
//         // 현재 연산자를 스택에 추가
//         stack.push(str);
//     } else if (str === '+' || str === '-') {
//         // 여는 괄호 '('를 만날 때까지 스택에서 팝하여 결과에 추가합니다.
//         // 이는 덧셈과 뺄셈이 곱셈과 나눗셈보다 낮은 우선순위를 갖기 때문입니다.
//         while (stack.length && stack[stack.length - 1] !== '(') {
//             answer += stack.pop();
//         }
//         // 현재 연산자를 스택에 추가
//         stack.push(str);
//     } else {
//         answer += str;
//     }
// })
// 스택에 남아 있는 모든 연산자를 팝하여 결과에 추가
while (stack.length) {
    answer += stack.pop();
}
console.log(answer)


