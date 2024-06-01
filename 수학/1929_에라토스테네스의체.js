const fs = require('fs');
const input = fs.readFileSync('../example.txt').toString().split('\n');

const answer = (start, end) => {
    // 배열을 index를 활용하기 때문에 마지막 숫자보다 1크게 생성해준다.
    // 소수가 아닌 수를 false 하기 때문에 true로 체워준다.
    const isPrime = Array(end + 1).fill(true)

    // 0과 1은 소수에서 제외
    isPrime[0] = isPrime[1] = false

    // 반드시 제곱근까지 포함하여 순회한다.
    for(let i = 2; i <= Math.sqrt(end); i++) {
        // i가 true이면 인덱스의 배수의 제외가 안됬다는 뜻
        // i의 배수만큼 순회하면서 제외한다.
        if(isPrime[i]){
            for(let j = i * i; j <= end; j += i){
                isPrime[j] = false
            }
        }
    }

    let result = ''
    for(let i = start; i <= end; i++) {
        if(isPrime[i]) {
            result += `${i}\n`
        }
    }
    return result.trim()
}
const [start, end] = input[0].split(' ')
console.log(answer(Number(start), Number(end)))
