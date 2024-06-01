const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [num1, num2] = input[0].split(' ')

// 두 정수  a와  b의 최대 공약수를 구하려고 할 때,
// a를  b로 나눈 나머지를  r라고 하면
// gcd(a, b) = gcd(b, r) 가 됩니다.
const gcd = (a, b) => {
    const remainder = a % b
    if(remainder === 0) return b
    return gcd(b, remainder)
}
const lcm = (a, b) => {
    return (a * b) / gcd(a, b)
}
console.log(gcd(num1, num2));
console.log((num1 * num2) / gcd(num1, num2));
