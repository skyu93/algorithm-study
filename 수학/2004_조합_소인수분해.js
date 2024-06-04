// const cache = new Map()
// const factorial = (num) => {
//     if(num === 1) return 1
//     if(cache.has(num)) return cache.get(num)
//
//     cache.set(num, num * factorial(num - 1))
//     return cache.get(num)
// }
//
// const permutation = (count, pick) => {
//     let result = 1
//     for(let i = 0; i < pick; i++) {
//         result *= count - i
//     }
//     return result / factorial(pick)
// }

/*
*
* 소인수 분해란?
* 소인수 분해는 어떤 수를 소수(prime number)들의 곱으로 나타내는 것입니다.
* ex) 12를 소인수 분해하면 12 = 2 * 2 * 3입니다.

* 왜 2와 5의 소인수 개수를 세면 마지막 0의 개수를 알 수 있나요?
* 어떤 숫자가 10으로 나누어 떨어지려면, 그 숫자는 2와 5를 포함해야 합니다. 10 = 2 * 5이기 때문입니다.
* 따라서, 어떤 수가 끝에 0을 포함하려면 그 수는 2와 5의 곱을 포함해야 합니다.

* 예를 들어, 100은 2^2 * 5^2입니다. 여기서 2와 5의 쌍이 2개 있기 때문에 끝에 2개의 0이 있습니다.
* 조합에서 0의 개수 구하기
* nCm을 계산할 때, 2와 5의 소인수의 개수를 세는 이유는 다음과 같습니다:

* 조합 공식: nCm = n! / (m! * (n - m)!)
* 소인수 개수 세기: n!에서 2와 5의 개수를 세고, m!와 (n - m)!에서 2와 5의 개수를 뺍니다. 왜냐하면, 조합의 분모에 있는 소인수 개수는 분자에서 빼야 하기 때문입니다.
* 마지막 0의 개수: 마지막 0의 개수는 2와 5의 소인수 쌍의 개수에 의해 결정됩니다. 따라서, 2와 5의 소인수 개수 중 작은 값이 마지막 0의 개수입니다.

* */

const fs = require('fs');
const input = fs.readFileSync('../example.txt')
    .toString()
    .trim()
    .split(' ');
const [n, m] = input.map(Number);

// 주어진 수에서 특정 소수의 개수를 세는 함수
function countFactors(n, factor) {
    let count = 0;
    for (let i = factor; i <= n; i *= factor) {
        count += Math.floor(n / i);
    }
    return count;
}

// nCm에서 2와 5의 소인수 개수를 계산하여 마지막 0의 개수 구하는 함수
const trailingZerosInCombination = (n, m) => {
    const count2 = countFactors(n, 2) - countFactors(m, 2) - countFactors(n - m, 2);
    const count5 = countFactors(n, 5) - countFactors(m, 5) - countFactors(n - m, 5);
    return Math.min(count2, count5);  // 2와 5의 쌍의 개수 중 작은 값
}

console.log(trailingZerosInCombination(n, m));
