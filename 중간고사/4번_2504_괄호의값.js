const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../example.txt'
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')

const stack = [];
for (const p of input[0]) {
    if (p === ")") {
        let result = 0;
        let top = 0;

        // 열린 괄호를 만날때까지 숫자를 더한다.
        while (Number.isInteger(top)) {
            result += top;
            top = stack.pop();
        }

        // 탑이 닫힌 괄호면 정상
        if (top === "(") {
            // result 값이 0이면 괄호 내부에 값이 존재하지 않음 즉 기본 괄호 ()임
            // 그렇지 않으면 괄호 안에 값이 존재한다는 뜻으로 *2 대상
            stack.push(result ? result * 2 : 2);
        } else {
            // 만약 다른 괄호가 나오는 경우 옳바른 괄호가 아니므로 0 출력
            console.log(0);
            return;
        }
    }
    else if (p === "]") {
        let temp = 0;
        let top = 0;
        while (Number.isInteger(top)) {
            temp += top;
            top = stack.pop();
        }
        if (top === "[") {
            stack.push(temp ? temp * 3 : 3);
        } else {
            console.log(0);
            return;
        }
    }else {
        stack.push(p)
    }
}


console.log(
    stack
        .filter(s => !Number.isInteger(s))
        .length > 0 ? 0 : stack.reduce((acc,cur)=>acc+cur)
);
