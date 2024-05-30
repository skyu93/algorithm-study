const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [num1, num2] = input[0].split(' ')

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
